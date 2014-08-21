# Jekyll Pages

[![Build Status](https://travis-ci.org/caleorourke/jekyll-pages.svg?branch=master)](https://travis-ci.org/caleorourke/jekyll-pages)
[![Dependency Status](https://david-dm.org/caleorourke/jekyll-pages.svg?theme=shields.io)](https://david-dm.org/caleorourke/jekyll-pages)
[![devDependency Status](https://david-dm.org/caleorourke/jekyll-pages/dev-status.svg?theme=shields.io)](https://david-dm.org/caleorourke/jekyll-pages#info=devDependencies)

> Serve [Jekyll](http://jekyllrb.com)-powered sites locally using [Grunt](http://gruntjs.com).

## Getting Started

This plugin requires [Grunt](http://gruntjs.com) `~0.8.0` and [Jekyll](http://jekyllrb.com) `>= v2.0.0`.

If you haven't used [Grunt](http://gruntjs.com) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, which explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with the command:

```shell
npm install jekyll-pages --save-dev
```

After the plugin has been installed, load it in your Gruntfile:

```js
grunt.loadNpmTasks("jekyll-pages");
```

## Configuration

Setup your `Gruntfile.js` to use any of the available options below.

### options

You can use all of the configuration options available in the [Jekyll Documentation](http://jekyllrb.com/docs/configuration), as well as some special options provided by this plugin.

#### src

Type: `string` <br/>
Default: `.`

The directory Jekyll reads files from.

#### dest

Type: `string` <br/>
Default: `./_site`

The directory Jekyll writes files to.

#### watch

Type: `boolean` <br/>
Default: `false`

Regenerates the site when files are modified.

To run multiple watch tasks in a project, use [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) instead.

#### serve

Type: `boolean` <br/>
Default: `false`

Builds the site and starts a local Jekyll development server on <samp>http://localhost:4000</samp>. If `serve` is false, the site will build itself using the `build` command.

Serve mode does last forever. Kill it by pressing <kbd>Ctrl+C</kbd>.

For complex projects, use [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect) instead.

#### doctor (cut)

Type: `boolean` <br/>
Default: `false`

Test your site for common errors and deprecated code. Ignores all other options except `src`, `config`, and `bundleExec`.

#### config

Type: `string` <br/>
Default: `_config.yml`

Specifies a custom configuration file. Multiple files separated by a comma will cascade right to left.

#### raw

Type: `string`

Creates a temporary <samp>_config.yml</samp> with the contents of `raw`. This config file takes precedence over other config files.

#### safe

Type: `boolean` <br/>
Default: `true` CHANGE THIS!

Enables or disables custom plugins. If you're using GitHub to publish your site, this option will automatically be set to `false`. 

#### plugins

Type: `string` <br/>
Default: `./_plugins`

The directory for plugins. 

#### layouts

Type: `string` <br/>
Default: `./_layouts`

The directory for layouts.

#### drafts

Type: `boolean` <br/>
Default: `false`

Processes and renders draft posts.

#### future (cut)

Type: `boolean` <br/>
Default: `false`

Publishes posts with a future date.

#### lsi

Type: `boolean` <br/>
Default: `false`

Produces an index for related posts.

#### limit_posts (cut)

Type: `number` <br/>

Limits the number of posts to parse and publish.

#### port

Type: `string` or `number` <br/>

Listens on the given port (requires `serve`).

#### host

Type: `string` <br/>

Listens at the given hostname (requires `serve`).

#### baseurl

Type: `string` <br/>

Serves the website from the given base URL (requires `serve`).

#### bundleExec

Type: `boolean` <br/>
Default: `false`

Run `jekyll` with [bundle exec](http://gembundler.com/v1.3/man/bundle-exec.1.html).

## Usage Examples

Follow [this Grunt example](https://gist.github.com/3753650) to get started with jekyll-pages quickly.

### Example Config No. 1

In this example, running `grunt jekyll` will fire off the task.

```js
grunt.initConfig({
    jekyll: {                               // Task
        options: {                          // Universal options
            bundleExec: true,
            src : "<%= app %>"
        },
        dist: {                             // Target
            options: {                      // Target options
                dest: "<%= dist %>",
                config: "_config.yml,_config.build.yml"
            }
        },
        serve: {                            // Another target
            options: {
                dest: ".jekyll",
                drafts: true
            }
        }
    }
});

grunt.loadNpmTasks("jekyll-pages");

grunt.registerTask("default", ["jekyll"]);
```

### Example Config No. 2

In this example, running `grunt serve` will fire off one task, and  `grunt test` will fire off the other.

```js
grunt.initConfig({
    jekyll: {
        test: {},
        serve: {
            options: {
                watch: true,
                serve: true,
                baseurl: ["\"\""]
            }
        }
    }
});

grunt.loadNpmTasks("jekyll-pages");

    
grunt.registerTask("serve", ["jekyll:serve"]);
grunt.registerTask("test",  ["jekyll:test"]);
```

### Example Usage

#### Using the `raw` option

```js
grunt.initConfig({
  jekyll: {
    dist: {
      options: {
        config: "_config.yml",
        // Construct a string with JavaScript.
        // Remember, in YAML line breaks and indentation matter.
        raw: "highlighter: pygments\n" +
             "exclude: [\'development\']\n" +
             "author:\n" +
             "  name: " + fetchAuthor() + "\n" +
             "  email: " + fetchEmail()
      }
    }
  }
});
```

## Changelog

- v0.1.0: Initial Release.


## License

Copyright (c) 2014 SoftLayer, an IBM Company

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
