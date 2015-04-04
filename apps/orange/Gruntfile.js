/*
 #  Gruntfile
 #  Provides configuration for tasks and Grunt extensions
 #
 #  Copyright © Michael O'Rourke (@caleorourke)
 #  Code and documentation licensed under MIT
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),
    banner:
      '/* \n' +
      ' * <%= site.github.name %> <%= pkg.version %>, Built on <%= grunt.template.today(\'mm-dd-yyyy\') %>\n' +
      ' * <%= site.github.tagline %>\n' +
      ' * Code and documentation licensed under <%= site.github.license %>\n' +
      ' */\n\n',

    shell: {
      gems: {
        command: ['gem update --system --no-document',
                  'gem install github-pages'].join('&&'),
        options: {
          stdout: true
        }
      }
    },

    clean: {
      assets: ['assets/css/orange.min.css',
               'assets/js/orange.min.js']
    },

    concat: {
      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: ['vendors/transition.js',
              'vendors/sidebar.js',
              'vendors/classie.js',
              'vendors/easing.js',
              'less/helpers/toggle.js',
              'less/helpers/guesstimate.js'],
        dest: 'assets/js/orange.min.js'
      }
    },

    uglify: {
      main: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        src: '<%= concat.main.dest %>',
        dest: 'assets/js/orange.min.js'
      }
    },

    recess: {
      unminify: {
        options: {
          compile: true,
          compress: false,
          banner: '<%= banner %>'
        },
        src: ['less/orange.less'],
        dest: 'assets/css/orange.min.css'
      },
      minify: {
        options: {
          compile: true,
          compress: true,
          banner: '<%= banner %>'
        },
        src: ['<%= recess.unminify.src %>'],
        dest: '<%= recess.unminify.dest %>'
      }
    },

    validation: {
      test: {
        options: {
          charset: 'utf-8',
          doctype: 'HTML5',
          reset: true,
          relaxerror: ['Attribute href not allowed on element div at this point',
                       'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
                       'Bad value  for attribute href on element link',
                       'Element img is missing required attribute src.',
                       'Illegal character in query: not a URL code point',
                       'Section lacks heading']
        },
        files: {
          src: ['_site/*.html', '_site/**/*.html']
        }
      },
    },

    pages: {
      start: {
        options: {
          watch: true,
          serve: true,
          baseurl: ['\'\'']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll-pages');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build',         ['clean', 'concat', 'uglify', 'recess:minify']);
  grunt.registerTask('build:pretty',  ['clean', 'concat', 'recess:unminify']);
  grunt.registerTask('install',       ['shell:gems']);
  grunt.registerTask('preview',       ['pages:start']);
  grunt.registerTask('serve',         ['build', 'pages:start']);
  grunt.registerTask('serve:pretty',  ['build:pretty', 'pages:start']);
  grunt.registerTask('test',          ['validation']);
};
