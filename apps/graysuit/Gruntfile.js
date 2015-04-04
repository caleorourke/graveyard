/*
 #  Gruntfile
 #  Provides configuration for tasks and Grunt extensions
 #
 #  Copyright © SoftLayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),
    banner:
      '/* \n' +
      ' * \n' +
      ' * <%= site.github.name %> <%= pkg.version %>, Build <%= grunt.template.today(\'mm-dd-yyyy\') %>\n' +
      ' * <%= site.github.tagline %>\n' +
      ' * Code and documentation licensed under <%= site.github.license %>\n' +
      ' * \n' +
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
      assets: ['assets/css/graysuit.min.css',
               'assets/js/graysuit.min.js']
    },

    concat: {
      main: {
        options: {
          banner: '<%= banner %>'
        },
        src: ['library/plugins/bootstrap.min.js',
              'library/plugins/dataTables.jquery.js',
              'library/plugins/dataTables.bootstrap.js',
              'library/plugins/dcjq.accordion.js',
              'library/plugins/raphael.min.js'
              ],
        dest: 'assets/js/graysuit.min.js'
      }
    },

    uglify: {
      main: {
        options: {
          banner: '<%= banner %>',
          report: 'min'
        },
        src: '<%= concat.main.dest %>',
        dest: 'assets/js/graysuit.min.js'
      }
    },

    recess: {
      unminify: {
        options: {
          compile: true,
          compress: false,
          banner: '<%= banner %>'
        },
        src: ['library/less/@import.less'],
        dest: 'assets/css/graysuit.min.css'
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
          reset: false,
          relaxerror: ['Attribute  not allowed on element  at this point',
                       'Bad value X-UA-Compatible for attribute http-equiv on element meta.',
                       'Bad value  for attribute  on element .',
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
      test: {},
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
  grunt.registerTask('test',          ['pages:test', 'validation']);
};
