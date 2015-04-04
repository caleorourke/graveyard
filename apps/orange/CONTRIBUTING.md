# Contributing Guidelines

The Product Charter is open source. It's hosted, developed, and maintained on GitHub.

The dev workflow follows the <a href="http://help.github.com/articles/using-pull-requests" target="_blank">fork-pull model</a> and leverages <a href="http://github.com/caleorourke/product-charter/issues" target="_blank">issues</a> and <a href="http://github.com/caleorourke/product-charter/pulls" target="_blank">pull requests</a> for source control, bug fixes, and new feature development. Anyone is welcome to submit a request, but we ask that you follow a few simple guidelines in regards to:

* [Code Standards](#code-standards)
* [Pull Requests](#pull-requests)
* [Feature Requests](#feature-requests)
* [Issue Reporting](#issue-reporting)

## Code Standards

All submissions should follow the <a href="http://codeguide.co" target="_blank">Code Guide by @mdo</a>. Also, as a suggestion, you can configure these settings in your editor to follow our code style.

~~~
"translate_tabs_to_spaces": true,
"tab_size": 2,
"ensure_newline_at_eof_on_save": false,
"default_encoding": "UTF-8",
"default_line_ending": "lf",
"trim_trailing_white_space_on_save": true
~~~

> Names and formatting will vary across different editors.

## Pull Requests

We accept all types of pull requests, just as long as they stay within scope and don't break compatibility downstream. If you're unsure about what impact your request might have, send a [new feature request](#feature-requests) first. This gives us a chance to vet it before you start working on something that we may decide not to merge.

Create a pull request by following the instructions below.

1. Fork the the Product Charter from GitHub: `http://github.com/caleorourke/product-charter/fork`
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am "add some sweet features"`
4. Push to the branch: `git push origin my-new-feature`
5. Create a new Pull Request in GitHub

## Feature Requests

When submitting a new request, please provide as much context as possible to justify how it fits in with the scope and longevity. You can [search our current requests](http://github.com/caleorourke/product-charter/issues) or [create a new request](http://github.com/caleorourke/product-charter/issues/new) to submit one.

## Issue Reporting

Got issues? Here are some suggestions to help guide you through escalating it to us.

#### Screen issues on GitHub

All issues are bagged and tagged on GitHub. Click [search](http://github.com/caleorourke/product-charter/issues) and make sure your issue hasn't already been reported.

#### Provide information about your setup

This includes versions, when was it installed, what you're trying to do, and so on.

#### Gauge its severity, impact, and frequency

Help us understand how serious the issue is and what priority we need to triage it in.

#### Share code pastes on Gist

Paste any code, logs, or errors into a page on <a href="http://gist.github.com" target="_blank">Gist</a> and drop the link to it in the report.

#### Use the template to write-up the report

A good report should not require anyone to pine for more information. That's why we suggest using our template. It's sufficient for the majority of reports, albeit some issues may require us to ask for more details.

~~~
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
~~~

#### Submit the issue on GitHub

When you're ready, [open a new issue](http://github.com/caleorourke/product-charter/issues/new) and send it over to us.
