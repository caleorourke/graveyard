---
layout: docs
title: Developer Guide
tagline: The official starting point for anyone ready to get elbow-deep in code.
order: 3
baseurl: "../../"
---

# Purpose

This guide explains how to start writing code for {{site.github.title}}. At this point, you should know the basics covered in [Getting Started]({{page.baseurl}}docs/getting-started). If not, we recommend starting there first. This guide doesn't rehash most of those topics.

---

# Core Concepts

So far, we've discussed that:

* {{site.github.title}} is a reference implementation of our {{site.github.client}}
* It bootstraps the SoftLayer API
* It provides access to SoftLayer environments
* It can spin-up virtual servers with "a la carte" features
* It gives you the facilities to carry out administrative tasks

To get more technical, {{site.github.title}} is an application-level utility called `sl` and provides a simple interface to our SoftLayer API. It does this by bootstrapping pre-wrapped API calls and using modules to carry out routine tasks. And like other CLIs, ours stays true to the standard format.

Below is an example of the CLI in action.

<section class="panel panel-example">
```bash
$ sl example print -h
```
</section>

In this example:

* `sl` is our utility
* `example` is the command for the utility to run
* `print` is the argument passed to the command
* `-h` is the option passed to the command via the argument

---

# Code Organization

Below is the basic spread for our source.

<output>
├─<i class="fa fa-folder-open-o fa-fw"></i> SoftLayer
│  └─<i class="fa fa-folder-open-o fa-fw"></i> CLI
│     └─<i class="fa fa-folder-o fa-fw"></i> modules
│  ├─<i class="fa fa-folder-o fa-fw"></i> managers
│  └─<i class="fa fa-folder-o fa-fw"></i> tests
├─<i class="fa fa-folder-o fa-fw"></i> docs
└─<i class="fa fa-folder-o fa-fw"></i> tools
</output>

Below is an overview of each directory.

| Directory                           | Contents |
| ----------------------------------- | -------- |
| <samp>SoftLayer/</samp>             | Python bindings for the API |
| <samp>SoftLayer/CLI/</samp>         | Source code for CLI |
| <samp>SoftLayer/CLI/modules/</samp> | Pluggable modules for CLI |
| <samp>SoftLayer/managers/</samp>    | Helpers for making API calls |
| <samp>SoftLayer/tests/</samp>       | Unit tests for API, CLI, and Managers |
| <samp>docs/</samp>                  | Raw content for [{{site.github.client}}](http://softlayer-python.readthedocs.org/en/latest) |
| <samp>tools/</samp>                 | Production and testing dependencies |

> Several subdirectories were not mentioned deliberately since they're reserved for doc content.

---

# Functionality

At its core, {{site.github.title}} is composed of four major parts:

1. [Modules](#modules)
2. [Docstrings](#docstrings)
3. [Actions](#actions) (e.g. [Arguments](#arguments) and [Options](#options))
4. [Output](#output)

## Modules

Modules are Python executable files in the <samp>SoftLayer/CLI/modules</samp> directory. Each one contains specific definitions and statements that handle most of the heavy lifting.

The file name of each module is the exact name you'll use after `sl` (minus the <samp>.py</samp> suffix). For example, running `sl vs` references the <samp>SoftLayer/CLI/modules/vs.py</samp> module.

Below is a typical setup for the <samp>example.py</samp> module.

<section class="panel panel-example">
```bash
usage: sl example <command> [<args>...] [options]

Example implementation of a CLI module

Available commands are:
  parse   Parsing args example
  pretty  Formatted print example
  print   Print example
```
</section>

### Complete list of Modules

To see a complete list of modules, run `sl`.

```bash
$ sl
usage: sl <module> [<args>...]
       sl help <module>
       sl help <module> <command>
       sl [-h | --help]

SoftLayer Command-line Client

Compute:
  image      Manages compute and flex images
  metadata   Get details about this machine. Also available with 'my' and 'meta'
  server     Bare metal servers
  sshkey     Manage SSH keys on your account
  vs         Virtual Servers (formerly CCIs)

Networking:
  cdn        Content Delivery Network service management
  dns        Domain Name System
  firewall   Firewall rule and security management
  globalip   Global IP address management
  messaging  Message Queue Service
  rwhois     RWhoIs operations
  ssl        Manages SSL
  subnet     Subnet ordering and management
  vlan       Manage VLANs on your account

Storage:
  iscsi      View iSCSI details
  nas        View NAS details

General:
  config     View and edit configuration for this tool
  ticket     Manage account tickets
  summary    Display an overall summary of your account
  help       Show help

See 'sl help <module>' for more information on a specific module.
```

---

## Docstrings

[Docstrings](http://legacy.python.org/dev/peps/pep-0257) are literal strings used as the first statement in a module, function, class, or method. You might be familiar with another term---"docblocks"---from other languages like PHP, C++, CoffeeScript, and so on.

### Docstrings with Modules

In each module, a docstring parses command-line arguments and usage patterns that users will see. We use [docopt](http://docopt.org) to parse docstrings. This means that there are some tenants for styling them since you'll need to conform to the docopt specs. This includes:

* Putting two spaces before commands in a command list to create an option list.
* Adding two spaces after the longest command/option to align the descriptions.
  * If a description takes up more than one line, indent it two spaces past the current indention for all additional lines.
* Alphabetizing all commands/option lists.
  * For options, use the long name to alphabetize the list.

### Docstrings with Actions

Actions also use docstrings to parse command-line arguments. But unlike with modules, commonly-used arguments are added to the end, such as `--config` and `--format`.

The requirements for actions include:

* The docstring for docopt
* Class attributes for `actions`
* The `def execute(self, args):` function

Below is a minimal implementation of what `sl example print` would look like.

<section class="panel panel-example">
```py
class ExampleAction(CLIRunnable):
"""
usage: sl example print [options]

Print example
"""

  action = 'print'

  def execute(self, args):
    print "EXAMPLE!"
```
</section>

Running this from the CLI would work like the following.

<section class="panel panel-example">
```bash
$ sl example print
EXAMPLE!
```
</section>

<section class="panel panel-example">
```bash
$ sl example print -h
usage: sl example print [options]

Print example

Standard Options:
  --format=ARG           Output format. [Options: table, raw] [Default: table]
  -C FILE --config=FILE  Config file location. [Default: ~/.softlayer]
  -h --help              Show this screen
```
</section>

---

## Actions

Actions are parameters the {{site.github.client}} passes along to the API. These can be an **argument** or **option** (defined below).

* Argument: Locates the source or destination of information, or alter some type of operation.
* Option: Tells the command to create, read, update, delete, or display something. Other names for options are "flag" and "switch".

### Implementing Actions

You can implement actions easily just by adding a class to a module with the subclass of `CLIRunnable`.

> Giving it this subclass is an important part of implementing an action because the name of the parent class is not referenced anywhere.

```py
class CLIRunnable(object):
  options = []  # set by subclass
  action = None  # set by subclass

  def __init__(self, client=None, env=None):
    self.client = client
    self.env = env

  def execute(self, args):
    pass
```

### Arguments

Below is an example of implementing an argument. Use these to identify the source or destination of information, or alter some type of operation.

The docopt website has a lot of in-depth content and examples of arguments. Go to <http://docopt.org> and read more.

<section class="panel panel-example">
```py
class ExampleArgs(CLIRunnable):
"""
usage: sl example parse [--test] [--this=THIS|--that=THAT]
                        (--one|--two) [options]

Argument parsing example

Options:
  --test  Print different output
"""

  action = 'parse'

  def execute(self, args):
    if args.get('--test'):
      print "Just testing, move along..."
    else:
      print "This is fo'realz!"

    if args['--one']:
      print 1
    elif args['--two']:
      print 2

    if args.get('--this'):
      print "I gots", args['--this']

    if args.get('--that'):
      print "you dont have", args['--that']
```
</section>

### Options

Options tell the command to create, read, update, or delete something. These may be conjoined with an argument or made to stand on their own. Either way, most commands will take in additional options. To see a complete list of options, use `-–help`.

```bash
$ sl vs list --help
usage: sl vs list [--hourly | --monthly] [--sortby=SORT_COLUMN] [--tags=TAGS]
                  [options]

List virtual servers

Examples:
  sl vs list --datacenter=dal05
  sl vs list --network=100 --cpu=2
  sl vs list --memory='>= 2048'
  sl vs list --tags=production,db

Options:
  --sortby=ARG  Column to sort by. options: id, datacenter, host,
                Cores, memory, primary_ip, backend_ip

Filters:
  --hourly                 Show hourly instances
  --monthly                Show monthly instances
  -H --hostname=HOST       Host portion of the FQDN. example: server
  -D --domain=DOMAIN       Domain portion of the FQDN example: example.com
  -c --cpu=CPU             Number of CPU cores
  -m --memory=MEMORY       Memory in mebibytes (n * 1024)
  -d DC, --datacenter=DC   datacenter shortname (sng01, dal05, ...)
  -n MBPS, --network=MBPS  Network port speed in Mbps
  --tags=ARG               Only show instances that have one of these tags.
                           Comma-separated. (production,db)

For more on filters see 'sl help filters'

Standard Options:
  --format=ARG           Output format. [Options: table, raw] [Default: table]
  -C FILE --config=FILE  Config file location. [Default: ~/.softlayer]
  -h --help              Show this screen
```

---

## Output

Output refers to how the CLI uses `execute` to display on-screen results. By default, the `execute()` method expects to return either `None` or an instance of `helpers.Table`. If it returns `None`, the CLI assumes all output is being handled inside `execute()`.

A good example of where it's ideal to handle your own output is `DumpZone` in the <samp>dns.py</samp> module. The data from here comes back pre-formatted from the API. 99% of the time, though, data will come back unformatted.

As an example, we created `sl example pretty`.

<section class="panel panel-example">
```py
class ExamplePretty(CLIRunnable):
"""
usage: sl example pretty [options]

Pretty output example
"""

  action = 'pretty'

  execute(self, args):
    # create a table with two columns: col1, col2
    t = Table(['col1', 'col2'])

    # align the data facing each other
    # valid values are r, c, l for right, center, left
    # note, these are suggestions based on the format chosen by the user
    t.align['col1'] = 'r'
    t.align['col2'] = 'l'

    # add rows
    t.add_row(['test', 'test'])
    t.add_row(['test2', 'test2'])

  return t
```
</section>

If you run `sl example pretty`, the CLI will spit out a neat, readable table.

<section class="panel panel-example">
```bash
$ sl example pretty

:.......:.......:
:  col1 : col2  :
:.......:.......:
:  test : test  :
: test2 : test2 :
:.......:.......:
```
</section>

If you add `--format raw`, you can see the data in the raw.

<section class="panel panel-example">
```bash
$ sl example pretty --format raw

test test
test2 test2
```
</section>

> Table formats are controlled upstream in the <samp>formatting.py</samp> file. This was done intentionally to make support of more data formats in the future easier to implement.

---

# API Access

Access to our API is available via the `client` attribute of `CLIRunnable`. For example, you can use `self.client` in `execute()` to access an instantiated instance of `SoftLayer.API.Client`.

Check out our [{{site.github.client}} docs](http://softlayer-python.readthedocs.org/en/latest/api/client.html#getting-started) for details on how to use the `client` object.

---

# Confirmation Prompts

Confirmations prompts ask for some form of acknowledgment before continuing. By default, all confirmations are enabled.

## Disabling Confirmations

All confirmations can be disabled easily by checking for `args['--really']`.

To inject the `--really` option, add `options = ['confirm']` right below `action`.

<section class="panel panel-example">
```py
class ExampleArgs(CLIRunnable):
"""
usage: sl example parse [--test] [--this=THIS|--that=THAT]
                        (--one|--two) [options]

Argument parsing example

Options:
  --test  Print different output
"""

  action = 'parse'
  options = ['confirm']  # confirm adds the '-y|--really' options and help

  def execute(self, args):
    pass
```
</section>

> Adding this below `action` will ensure consistency throughout the CLI.

## Prompt Types

There are two confirmation prompts that leverage `.valid_response`:

1. `no_going_back`
2. `confirm`

### No Going Back

`no_going_back` accepts a single confirmation parameter that is generally unique to that action, such as typing in a command or any string that isn't reactionary. A few good examples are:

* Keying in your hostname to cancel a server
* Using the ID of an object
* The phrase "I know what I am doing"

This parameter returns True, False, or None, and the prompt string must be pre-defined.

### Confirm

`confirm`, on the other hand, is a lot more flexible. It lets you set prompt strings and use default values. However, it's limited to only **Yes** or **No** values. And just like `no_going_back`, this parameter also returns True, False, or None.

```py
confirmation = args.get('--really') or no_going_back('YES')
if confirmation:
  pass
```

## Aborting Confirmations

If a confirmation fails, you will need to bail out of `execute()`. Raise a `CLIAbort` with a message for the user as the first parameter. This will force the CLI to display an error and stop any code from executing.

```py
if not confirmation:
  raise CLIAbort("Aborting. Failed confirmation")
```

---

# Configuration

The configuration for {{site.github.client}} gets created automatically after running `sl config setup`. This is an INI-based file with the following format:

* A required section: `[softlayer]`
* Two required properties: `username` and `api_key`
* Two optional properties: `endpoint_url` and `timeout`

Below is an example of how a configuration file should look.

```ini
[softlayer]
username = username
api_key = oyVmeipYQCNrjVS4rF9bHWV7D75S6pa1fghFl384v7mwRCbHTfuJ8qRORIqoVnha
endpoint_url = https://api.softlayer.com/xmlrpc/v3/
timeout = 40
```

---

# Where to Go Next

Wondering where to go next? Here are a few ideas.

* Check out the official [{{site.github.client}} docs](http://softlayer-python.readthedocs.org/en/latest)
* Boost your knowledge on the [SoftLayer API](http://sldn.softlayer.com/reference/softlayerapi)
* Learn more about [Python Bindings](http://sldn.softlayer.com/article/Python) on our Developers Network
* Not too familiar with Python? Find a heap of information on [Python's website](http://docs.python.org/3)

---

# License

We license our code and documentation under the terms of the {{site.github.license}} license. By contributing to any project, you're allowing us to distribute your contribution under the terms of this license.
