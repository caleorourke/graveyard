## Turncoat

Turncoat is a blueprint for defining data artifacts in a visual manner.

* [Prerequisites](#prerequisites)
* [Quick Install](#quick-install)
* [Local Deployment](#local-deployment)
* [Roll Your Own](#roll-your-own)
* [Code Organization](#code-organization)
* [Versions](#versions)

### Prerequisites

Turncoat is hosted on GitHub using [GitHub Pages](http://pages.github.com). It can be served locally using [Jekyll](http://jekyllrb.com) with __Ruby 1.9.3__ or greater. [Click here](http://www.ruby-lang.org/en/installation) to download and install Ruby.

> If you have Ruby, but aren’t sure which version, run `ruby -v`.

### Quick Install

1. Clone from GitHub and go into the directory.

        $ git clone -b gh-pages https://github.com/caleorourke/turncoat.git
        $ cd turncoat

2. Install Node.js.

        $ [sudo] npm install

3. Install GitHub Pages and runtime dependencies.

        $ [sudo] grunt install

### Local Deployment

Run the command below to preview a local instance of your site.

```bash
$ jekyll serve
```

After Jekyll starts, fire up a browser and type in `localhost:4000` for the web address. This will pull up the site Jekyll just generated.

#### Killing Jekyll

Serve mode lasts forever. It won't timeout after a period of non-usage. Press `CTRL+C` to stop the service.

### Roll Your Own

1. Make a fresh clone and go into the directory.

        $ git clone https://github.com/username/defector.git
        $ cd defector

2. Create a new `gh-pages` branch.

        $ git checkout --orphan gh-pages

3. Copy the contents from `/turncoat` to `/defector`.

        $ cp -r ~/turncoat/* ~/defector

4. Push your site to GitHub.

        $ git add .
        $ git commit -a -m "first commit"
        $ git push origin gh-pages

### Code Organization

Below is the basic spread for Turncoat (not including Jekyll or GitHub-related objects).

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
├─ less/
├─ plugins/
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

### Versions

Versions are in order of freshness and are named using one variation of the [first internationally recognized phonetic alphabet](https://gist.github.com/caleorourke/aebb9f2a916814ea4924).

The current version is **North**.

| Project        | Details              |
| -------------- | -------------------- |
| Name           | Turncoat (Informant) |
| Version        | [North](http://github.com/caleorourke/turncoat/tree/gh-pages) |
| Target Release | TBD                  |
| Status         | Deprecated           |
| Last Updated   | 2/11/2015            |

#### Deprecated Versions

Deprecated versions are stashed in case we want to reuse bits of those designs.

* [Milan](http://github.com/caleorourke/turncoat/tree/milan)
* [Lime](http://github.com/caleorourke/turncoat/tree/lime)
* [Koala](http://github.com/caleorourke/turncoat/tree/koala)
* [Jasper](http://github.com/caleorourke/turncoat/tree/jasper)
* [Ion](http://github.com/caleorourke/turncoat/tree/ion)
* [Halo](http://github.com/caleorourke/turncoat/tree/halo)
* [Ginger](http://github.com/caleorourke/turncoat/tree/ginger)
* [Frost](http://github.com/caleorourke/turncoat/tree/frost)
* [Echo](http://github.com/caleorourke/turncoat/tree/echo)
* [Dew](http://github.com/caleorourke/turncoat/tree/dew)
* [Celsius](http://github.com/caleorourke/turncoat/tree/celsius)
* [Black](http://github.com/caleorourke/turncoat/tree/black)
* [Aurora](http://github.com/caleorourke/turncoat/tree/aurora)

## License

Code and documentation is licensed under the MIT license.
