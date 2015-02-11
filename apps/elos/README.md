# Elos

**Engineering. Labs. Open Source.**

Elos introduces a new **SoftLayer Engineering** page based on cursory [mock-up designs](https://raw.githubusercontent.com/molotovf/elos/gh-pages/mockup.pdf). The intent is to advertise what we do, how cool we are, and publicly showcase our teams (Labs, Engineering & Operations, and Open Source) to job candidates and visitors of [www.softlayer.com](www.softlayer.com).

## Local Preview

The following is a quick "how to" for cloning, installing, and running Elos locally.

### Prerequisites

Elos requires __Ruby 1.9.3__ at minimum. [Click here](http://www.ruby-lang.org/en/installation) to download and install Ruby. If you have Ruby, but aren’t sure which version, run `ruby -v`.

### Clone and Install

Run the following commands.

    $ git clone -b gh-pages https://github.com/caleorourke/elos.git
    $ cd elos
    $ gem install bundler
    $ bundle install

### Serving

Run `jekyll serve` to preview Elos locally. Once Jekyll starts, fire up a browser and type `localhost:4000/prototype` for the web address.

#### Watch Option

Run `jekyll serve --watch` to monitor changes and apply updates.

#### Killing Jekyll

Serve mode lasts forever. Press `CTRL+C` to stop the service.
