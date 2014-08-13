# Contributing Guidelines

Like many of our projects, our plugins are open source. We host it, develop it, and maintain it on GitHub.

Our dev workflow follows the <a href="http://help.github.com/articles/using-pull-requests" target="_blank">fork-pull model</a> and leverages issues and pull requests for source control, bug fixes, and new feature development. Anyone is welcome to submit a request, but we ask that you follow a few simple guidelines in regards to:

* [Code Standards](#code-standards)
* [Pull Requests](#pull-requests)
* [Feature Requests](#feature-requests)
* [Issue Reporting](#issue-reporting)

## Code Standards

All submissions should follow the <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb JavaScript Style Guide</a>.

Also, as a suggestion, you can configure these settings in your editor to follow our code style.

~~~
"translate_tabs_to_spaces": true,
"tab_size": 4,
"ensure_newline_at_eof_on_save": false,
"default_encoding": "UTF-8",
"default_line_ending": "lf",
"trim_trailing_white_space_on_save": true
~~~

> Names and formatting will vary across different editors.

## Pull Requests

We accept all types of pull requests, just as long as they stay within our scope and don't break compatibility downstream. If you're unsure about what impact your request might have, send us a [New Feature request](#feature-request) first. This gives us a chance to vet it before you start working on something that we may decide not to merge.

Create a pull request by following the instructions below.

1. Fork it from GitHub: `http://github.com/caleorourke/plugin-name/fork`
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am "add some sweet features"`
4. Push to the branch: `git push origin my-new-feature`
5. Create new Pull Request in GitHub

## Feature Requests

When submitting a new request, please provide as much context as possible to justify how it fits in with our scope and longevity. Browse our open requests or submit a new one.

## Issue Reporting

Got issues? Here are some suggestions to help guide you through escalating it to us.

#### Screen Our Issues on GitHub

All issues are bagged and tagged on GitHub. Make sure your issue hasn't already been reported.

#### Provide Information about Your Setup

This includes versions, when was it installed, what you're trying to do, and so on.

#### Gauge Its Severity, Impact, and Frequency

Help us understand how serious the issue is and what priority we need to triage it in.

#### Share Code Pastes on Gist

Paste any code, logs, or errors into a page on <a href="http://gist.github.com" target="_blank">Gist</a> and drop the link to it in the report.

#### Use Our Template to Write-up the Report

A good report should not require anyone to pine for more information. That's why we suggest using this template. It's sufficient for the majority of reports, albeit some issues may require us to ask for more details.

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

#### Submit the Issue on GitHub

When you're ready, open a new issue and send it over to us.
