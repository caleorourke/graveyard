---
layout: docs
title: Getting Started
tagline: The ultimate how-to source for downloading, installing, and configuring Python CLI.
order: 1
baseurl: "../../"
---

# Introduction to {{site.github.title}}

{{site.github.title}} is a command-line utility that bootstraps our API and provides access to your SoftLayer environment. It also lets you create virtual servers with "a la carte" features like:

* Computing cores
* RAM
* Storage types
* Storage sizes, and more

Aside from that, the {{site.github.title}} is simply a reference implementation of our Python bindings. And since it harnesses power from those bindings, you'll need to install them to get the CLI.

To make it easy, we bundled everything together into one package---the <a href="{{site.github.repository_url}}" target="_blank">{{site.github.client}}</a>. Once it's installed, you can access the CLI instantly by running the `sl` command.

---

# Prerequisites

The {{site.github.client}} requires the minimum versions of Python, as well as access to our API and private network. Click the links below for more information.

* Python <a href="http://www.python.org/download/releases/2.6.9" target="_blank">2.6</a>, <a href="http://www.python.org/download/releases/2.7.8" target="_blank">2.7</a>, <a href="http://www.python.org/downloads/release/python-326" target="_blank">3.2</a>, <a href="http://www.python.org/downloads/release/python-336" target="_blank">3.3</a>
* A valid <a href="https://sldn.softlayer.com/article/Authenticating-SoftLayer-API" target="_blank">SoftLayer API username and key</a>
* A private network connection for the SoftLayer API endpoints

While you're at it, we also recommend grabbing a few tools to help along the way.

* Download <a href="http://pip.readthedocs.org/en/latest/installing.html" target="_blank">Pip</a>, a tool for installing and managing Python packages
* Download <a href="https://help.github.com/articles/set-up-git" target="_blank">Git</a>, the command-line and GUI version control utility used by GitHub
* Create a free <a href="https://help.github.com/articles/signing-up-for-a-new-github-account" target="_blank">GitHub account</a> to access our open-source projects

---

# Installation

There are a number of ways to install the {{site.github.client}} with our CLI. Some download and install packages in one shot, while others require a little work. To differentiate between each option, we split them up into two categories:

* [Quick Install](#quick-install)
* [Not-So Quick Install](#not-so-quick-install)

## Quick Install

These options will download and install packages automatically.

* [Pip](#pip)
* [Pip from GitHub](#pip-from-github)
* [Debian and Ubuntu](#debian-and-ubuntu)

### Pip

Run the command below to use <a href="https://pypi.python.org/pypi/pip" target="_blank">pip</a>.

```bash
$ pip install softlayer
```

### Pip from GitHub

Run the command below to pull the {{site.github.client}} down from GitHub and install it using pip.

```bash
$ pip install git+git://github.com/softlayer/softlayer-python.git
```

### Debian and Ubuntu

For Debian <a href="https://www.debian.org/releases/jessie" target="_blank">“jessie”</a> (in testing) and Ubuntu 14.04, run the command below to install our official packages.

```bash
$ sudo apt-get install python-softlayer
```

---

## Not-So Quick Install

Without `pip` or Debian/Ubuntu, you'll need to do things manually. This includes:

1. Installing [Git](#prerequisites)
2. Downloading or cloning the {{site.github.client}} from GitHub
3. [Installing the {{site.github.client}}](#install-into-site-packages) into site-packages

Scroll through the following download and clone options and pick one that works best for you.

* [Tarball download](#tarball-download)
* [Zip download](#zip-download)
* [HTTPS clone](#https-clone)
* [SSH clone](#ssh-clone)

### Tarball download

<a href="https://github.com/softlayer/softlayer-python/tarball/master">Download it here</a> or run the command below.

```bash
$ curl -OL https://github.com/softlayer/softlayer-python/tarball/master
```

### Zip download

<a href="https://github.com/softlayer/softlayer-python/zipball/master">Download it here</a> or run the command below.

```bash
$ curl -OL https://github.com/softlayer/softlayer-python/zipball/master
```

### HTTPS clone

Run the command below to clone over HTTPS.

```bash
$ git clone https://github.com/softlayer/softlayer-python.git
```

### SSH clone

Run the command below to clone over SSH.

```bash
$ git clone git@github.com:softlayer/softlayer-python.git
```

### Install into site-packages

Once you have a copy of the {{site.github.client}}, run the command below to install it into your site-packages.

```bash
$ python setup.py install
```

---

# Configuration

You can configure the CLI easily with the Automated Configuration Tool. To get started, run `sl config setup`.

The setup will prompt for:

* Your SoftLayer Portal username
* Your API key
* An endpoint URL

Before you start mining for these, here are a few things you should know.

* The default endpoint will be sufficient in most cases
* You can <a href="http://knowledgelayer.softlayer.com/procedure/retrieve-your-api-key" target="_blank">create/retrieve an API key</a> from our Portal
* If you don't have an API key, use your SoftLayer Portal username instead---our CLI will generate an API key for you

<section class="panel panel-example">
```bash
$ sl config setup

Username []: foo
API Key or Password []: bar
Endpoint (public|private|custom): public

:..............:........................................................:
:         Name : Value                                                  :
:..............:........................................................:
:     Username : foo                                                    :
:      API Key : bar                                                    :
: Endpoint URL : https://api.softlayer.com/xmlrpc/v3/                   :
:      Timeout : not set                                                :
:..............:........................................................:

Are you sure you want to write settings to "/Users/foo/.softlayer"? [Y/n]: y
Configuration Updated Successfully
```
</section>

Check your configuration by running `sl config show`.

<section class="panel panel-example">
```bash
$ sl config show

:..............:........................................................:
:         Name : Value                                                  :
:..............:........................................................:
:     Username : foo                                                    :
:      API Key : bar                                                    :
: Endpoint URL : https://api.softlayer.com/xmlrpc/v3/                   :
:..............:........................................................:
```
</section>

> Learn how to make your own [configuration file in the Developer's Guide]({{page.baseurl}}developers-guide/#configuration-format).

---

# Where to Go Next

Wondering where to go next? Here are a few ideas.

* See our [user guide]({{page.baseurl}}docs/user-guide) for info on how to create and work with virtual servers
* Learn about [becoming a contributor]({{page.baseurl}}docs/contributing)
* Get connected to us and [our community]({{page.baseurl}}docs/contributing/#join-our-community)
* Boost your knowledge of GitHub and explore the articles on <a href="http://help.github.com" target="_blank">GitHub Help</a>
