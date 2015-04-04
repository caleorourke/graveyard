---
layout: docs
title: Contributing
tagline: Learn how you can make a contribution to this project.
order: 4
baseurl: "../../"
---

# Guidelines

Like many of our projects, {{site.github.title}} is open source. We host it, develop it, and maintain it on GitHub.

Our dev workflow follows GitHub's [fork-pull model](https://help.github.com/articles/using-pull-requests) and leverages [issues]({{site.github.issues_url}}) and [pull requests]({{site.github.repository_url}}/pulls) for source control, bug fixes, and feature requests. Anyone is welcome to submit an issue or request, but we ask that you follow a few guidelines regarding:

* [Code Standards](#code-standards)
* [Pull Requests](#pull-requests)
* [Feature Requests](#feature-requests)
* [Issue Reporting](#issue-reporting)

---

# Code Standards

All submissions should follow the [PEP8 Style Guide for Python Code](http://legacy.python.org/dev/peps/pep-0008). Also, as a suggestion, you can shave off some time by configuring these settings in your editor to match PEP8's guidelines.

```
indent_style = space
indent_size = 2
end_of_line: lf
trim_trailing_whitespace = true
```

> Names and formatting vary across different editors.

---

# Pull Requests

We accept all types of pull requests, just as long as they stay within our scope and don't break compatibility downstream. If you're unsure about what impact your request might have, send us a [feature request](#feature-requests) first. This gives us a chance to vet it before you start working on something that we may decide not to merge.

Create a pull request by following the instructions below.

1. Fork {{site.github.title}} from GitHub: `http://github.com/softlayer/softlayer-python/fork`
2. Create your branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am "transfer vs to different account holder"`
4. Push to your branch: `git push origin my-new-feature`
5. Create a new Pull Request in GitHub

On a different note, the best ways to get your request merged quickly include:

* Following the [coding standards](#code-standards)
* Submitting requirements and/or test cases
* Providing a detailed explanation of what’s changing

---

# Feature Requests

We prefer that feature requests originate from requests already in GitHub, but we’re flexible. If you decide to submit a new one, please provide as much context possible to justify how it fits within our scope.

Click "Search" to browse current requests or "Request" to submit a new one.

<a class="button button-gray" href="{{site.github.issues_url}}?labels=CLI%2CNew+Feature" target="_blank">
  <i class="fa fa-search"></i> Search
</a>
<a class="button button-gray" href="{{site.github.issues_url}}/new" target="_blank">
  <i class="fa fa-share"></i> Request
</a>

---

# Issue Reporting

Got an issue? Here are some suggestions to guide you through escalating it.

### Search issues already in GitHub

All issues are bagged and tagged in GitHub. Click the "Search" button and make sure your issue hasn't already been reported.

<a class="button button-gray" href="{{site.github.issues_url}}?labels=CLI" target="_blank">
  <i class="fa fa-search"></i> Search
</a>

### Provide information about your setup

This includes versions, when it was installed, what you're trying to do, and so on.

### Tell us how critical it is

Help us understand how serious the issue is and what priority we need to triage it in.

### Share code pastes in Gist

Paste any code snippets, logs, or error messages into [Gist](http://gist.github.com) and drop the link into the report. [Here's an example](http://gist.github.com/caleorourke/42aa056026177bd7d53e).

> This method supports public and secret Gists.

### Use our template to write-up your report

A good report should not require anyone to pine for more information. That's why we suggest using this template. It's sufficient for the majority of reports---albeit some issues may require us to ask for more details.

```
A summary of the issue and what problem it's causing.

Severity: (e.g. low, medium, high)
Impact: (e.g. minimal, nuisance, show-stopper)
Frequency: (e.g. daily, on shut down, random)

Steps to Reproduce
1. This is the first step
2. This is the second step
3. Additional steps, etc.

[url] (link to your Gist page)

Include any other comments, such as how you worked around it, suggestions you have for fixing it, and so on.
```

### Submit the issue in GitHub

When you're ready, open a new issue and send it over to us.

<a class="button button-gray" href="{{site.github.issues_url}}/new" target="_blank">
  <i class="fa fa-share"></i> Submit
</a>

---

# Source Control

In order to maintain dependencies, backward compatibility, and merges from pull requests, we follow the [Semantic Versioning](http://semver.org) guidelines. This means each release is pegged with the `<major>.<minor>.<patch>` scheme. It also means each release adheres strictly to the following guidelines:

* Breaking backward compatibility bumps up the major and resets the minor and patch
* Adding new features or enhancements without breaking backward compatibility bumps up the minor and resets the patch
* Bug fixes and miscellaneous changes bumps up the patch

---

# Documentation

We treat our content like we treat our code. And like our code, we invite everyone to join in. Simply create an issue in GitHub and we'll review it.

If you'd like to submit content that you wrote, paste it into [Gist](http://gist.github.com) and include its link in the issue’s comments. Also, be sure to tell us what information we can use to honor your contribution. We like to give credit where credit is due.

---

# Join Our Community

Stay on top of what's happening in our development community.

* Follow [@{{site.twitter.handle}}](http://twitter.com/{{site.twitter.handle}}) on Twitter
* <a href="{{site.github.repository_url}}/watchers" target="_blank">Watch our GitHub repo</a> and keep up with the latest updates
* Join our <a href="irc://irc.freenode.net/{{site.freenode}}" target="_blank">{{site.freenode}}</a> IRC on freenode
* Check out all our open source work under [SoftLayer's profile]({{site.github.owner_url}}) on GitHub

---

# Where to Go Next

Wondering where to go next? Here are a few ideas.

* Visit the [Getting Started]({{page.baseurl}}docs/getting-started) page to download, install, and configure {{site.github.title}}
* Boost your knowledge on the <a href="http://sldn.softlayer.com/reference/softlayerapi" target="_blank">SoftLayer API</a>
* Learn more about writing code for {{site.github.title}} in our [Developer Guide]({{page.baseurl}}docs/developer-guide)
* Start collaborating with our [community members](#join-our-community)

---

# License

We license our code and documentation under the terms of the {{site.github.license}} license. By contributing to any project, you're allowing us to distribute your contribution under the terms of this license.
