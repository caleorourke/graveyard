<a href="http://travis-ci.org/caleorourke/orange?branch=gh-pages" target="_blank"><img src="http://travis-ci.org/caleorourke/orange.svg?branch=gh-pages" alt="Build Status"></a>
<a href="https://david-dm.org/caleorourke/orange#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/orange/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/orange/blob/gh-pages/LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

## Orange

##### Practical concepts to improve how you make products.

Orange is a lean-agile-pragmatic approach for developing products within and beyond the boundaries of a project, starting from ideation, to development, to adoption, to sunset. It places emphasis on prototyping, balanced teams, reduced cycle times, and customer validation.

Take note that nothing here is indelibly set in stone. This as a *living* charter. For this reason, each page has a date that shows when it was last updated. You can also [watch Orange on GitHub](https://github.com/caleorourke/orange/watchers) to get alerts when updates are made (requires a free GitHub subscription).

## Features

The webpages for Orange were built with readability and performance in mind. It includes:

* Responsive and mobile-ready viewing
* Smooth scrolling
* Estimated reading time
* Content index on each page
* Stamped "last modified" date

## Contributing

Anyone is welcome to submit an issue or request. Read through the [contributing guidelines](https://github.com/caleorourke/orange/blob/gh-pages/CONTRIBUTING.md). You can also use [Orange's wiki](https://github.com/caleorourke/orange/wiki) to write or paste your suggestions.

## Deployment

1. Verify **Node.js** and **Ruby** are installed

    ~~~
    # each command returns a version number
    $ node --version
    $ ruby -v
    ~~~

2. Clone Orange from GitHub and go into its directory (~5 sec.)

    ~~~
    $ git clone -b gh-pages https://github.com/caleorourke/orange.git
    $ cd orange
    ~~~

3. Install Grunt and the dev dependencies for Node.js (~10 sec.)

    ~~~
    $ [sudo] npm install
    ~~~

4. Install Jekyll and other runtime dependencies (~45 sec.)

    ~~~
    $ [sudo] grunt install
    ~~~

5. Run any of these commands to initiate a task

* [`grunt build`](#build)
* [`grunt install`](#install)
* [`grunt preview`](#preview)
* [`grunt serve`](#serve)
* [`grunt test`](#test)

##### Build
`grunt build` bundles and minifies `*.less` files to `*.css` using [RECESS](http://twitter.github.io/recess).

##### Install
`grunt install` updates RubyGems and runs `gem install github-pages`.

##### Preview
`grunt preview` builds the website, fires up a local environment on [http://localhost:4000](http://localhost:4000), and regenerates a new build whenever code is modified (except LESS stylesheets).

##### Serve
`grunt serve` is a combination of `$ grunt build` and `$ grunt preview`.

##### Test
`grunt test` builds the website locally, tests all `*html` files against [W3's HTML validation service](http://validator.w3.org), and spits out logs once it's finished.

## License

Code and documentation is licensed under the MIT license.
