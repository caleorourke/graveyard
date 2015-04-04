<a href="http://travis-ci.org/caleorourke/graysuit?branch=gh-pages" target="_blank"><img src="http://travis-ci.org/caleorourke/graysuit.svg?branch=gh-pages" alt="Build Status"></a>
<a href="https://david-dm.org/caleorourke/graysuit#info=devDependencies" target="_blank"><img src="https://david-dm.org/caleorourke/graysuit/dev-status.svg?theme=shields.io"></a>
<a href="http://github.com/caleorourke/graysuit/blob/gh-pages/LICENSE" target="_blank"><img src="http://img.shields.io/badge/License-MIT-blue.svg" alt="MIT-license badge"></a>

## Graysuit

Graysuit is a blueprint for defining data artifacts in a visual manner.

* [Prerequisites](#prerequisites)
* [Quick Install](#quick-install)
* [Local Deployment](#local-deployment)
* [Roll Your Own](#roll-your-own)
* [Code Organization](#code-organization)
* [Versions](#versions)

## Prerequisites

Graysuit is hosted on GitHub using [GitHub Pages](http://pages.github.com). It can be served locally using [Jekyll](http://jekyllrb.com) with __Ruby 1.9.3__ or greater. [Click here](http://www.ruby-lang.org/en/installation) to download and install Ruby. If you have Ruby, but aren’t sure which version, run `ruby -v`.

## Quick Install

1. Clone from GitHub and go into the directory.

        $ git clone -b gh-pages https://github.com/caleorourke/graysuit.git
        $ cd graysuit

2. Install Grunt's CLI.

        $ [sudo] npm install -g grunt-cli

3. Install Node packages.

        $ [sudo] npm install

4. Install GitHub Pages and runtime dependencies.

        $ [sudo] grunt install

## Local Deployment

Run the command below to preview a local instance of your site.

```bash
$ jekyll serve
```

After Jekyll starts, fire up a browser and type in `localhost:4000` for the web address. This will pull up the site Jekyll just generated.

### Killing Jekyll

Serve mode lasts forever. It won't timeout after a period of non-usage. Press `CTRL+C` to stop the service.

## Roll Your Own

1. Make a fresh clone and go into the directory.

        $ git clone https://github.com/username/mole.git
        $ cd mole

2. Create a new `gh-pages` branch.

        $ git checkout --orphan gh-pages

3. Copy the contents from `/graysuit` to `/mole`.

        $ cp -r ~/graysuit/* ~/mole

4. Push your site to GitHub.

        $ git add .
        $ git commit -a -m "first commit"
        $ git push origin gh-pages

## Code Organization

Below is the basic spread for Graysuit (not including Jekyll or GitHub-related objects).

<pre>
├─ _includes/
│   ├─ charts/
│   ├─ forms/
│   ├─ logs/
│   └─ modals/
│       ├─ processes/
│       └─ server/
├─ _layout/
├─ assets/
│   ├─ css/
│   ├─ fonts/
│   ├─ img/
│   └─ js/
├─ library/
│   ├─ less/
│   └─ plugins/
├─ alerts.html
├─ config.html
├─ index.html
├─ logs.html
├─ processes.html
├─ profile.html
├─ settings.html
├─ support.html
└─ usage.html
</pre>

## Versions

Versions are in order of freshness and are named using one variation of the [first internationally recognized phonetic alphabet](https://gist.github.com/caleorourke/aebb9f2a916814ea4924).

The current version is **Aurora**.

| Project        | Details              |
| -------------- | -------------------- |
| Name           | Graysuit             |
| Version        | [Celsius](http://github.com/caleorourke/graysuit/tree/gh-pages) |
| Target Release | -                    |
| Status         | Deprecated           |
| Last Updated   | 2/25/2015            |

## License

Code and documentation is licensed under the MIT license.
