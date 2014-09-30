#
# * GitHub
# * Fetches asynchronous payloads and provides basic auth
# *
# * Copyright (c) 2014 SoftLayer, an IBM Company
# * Released under the MIT license
#

# Contents (in alphabetical order)
# 1. Commits (disabled by default
# 2. Contributors
# 3. Members (disabled by default)
# 4. Milestones (disabled by default)
# 5. Pull requests (disabled by default)
# 6. Repos
# 7. Stargazers
# 8. Tags
# 9. Watchers


month = [
  "Jan"
  "Feb"
  "Mar"
  "Apr"
  "May"
  "Jun"
  "Jul"
  "Aug"
  "Sep"
  "Oct"
  "Nov"
  "Dec"
]

# Commits (date of last commit record)
# ------------------------------

### Unless you use OAuth, GitHub limits API hits to 60 each hour for a single IP. Due to that limit, we commented
this out for production. You can enable it simply by deleting the comment markings wrapped around it.

$.ajax
  url: "https://api.github.com/repos/softlayer/softlayer-python/commits?state=closed/callback?"
  dataType: "jsonp"
  success: (json) ->
    lastCommit = json.data[0]
    stamp = new Date(lastCommit.commit.committer.date)
    stampString = month[stamp.getMonth()] + " " + stamp.getDate()
    $("#date-commit").text stampString
    return
###

# Contributors (a count of contributors)
# ------------------------------

$.getJSON "https://api.github.com/repos/softlayer/softlayer-python/contributors?callback=?", (result) ->
  numContributors = result.data
  $ ->
    $("#num-contributors").text numContributors.length
    return
  return

# Milestones (date and title of last milestone closed)
# ------------------------------

### Unless you use OAuth, GitHub limits API hits to 60 each hour for a single IP. Due to that limit, we commented
this out for production. You can enable it simply by deleting the comment markings wrapped around it.

$.ajax
  url: "https://api.github.com/repos/softlayer/softlayer-python/milestones?state=closed/callback?"
  dataType: "jsonp"
  success: (json) ->
    lastMilestone = json.data[0]
    stamp = new Date(lastMilestone.updated_at)
    stampString = month[stamp.getMonth()] + " " + stamp.getDate()
    $("#date-milestone").text stampString
    $("#name-milestone").text lastMilestone.title
    return
###

# Members (a count of team members)
# ------------------------------

### Unless you use OAuth, GitHub limits API hits to 60 each hour for a single IP. Due to that limit, we commented
this out for production. You can enable it simply by deleting the comment markings wrapped around it.

$.getJSON "https://api.github.com/orgs/softlayer/members?callback=?", (result) ->
  numMembers = result.data
  $ ->
    $("#num-members").text numMembers.length
    return
  return
###

# Pulls requests (a count of open pull requests)
# ------------------------------

### Unless you use OAuth, GitHub limits API hits to 60 each hour for a single IP. Due to that limit, we commented
this out for production. You can enable it simply by deleting the comment marking wrapped around it.

$.getJSON "https://api.github.com/repos/softlayer/softlayer-python/pulls?callback=?", (result) ->
  numPulls = result.data
  $ ->
    $("#num-pulls").text numPulls.length
    return
  return
###

# Repos (a count of public repos)
# ------------------------------
$.getJSON "https://api.github.com/orgs/jumpgate/repos?callback=?", (result) ->
  numRepositories = result.data
  $ ->
    $("#num-repo").text numRepositories.length
    return
  return

# Stargazers (a count of stargazers)
# ------------------------------
$.getJSON "https://api.github.com/repos/softlayer/softlayer-python/stargazers?callback=?", (result) ->
  numStargazers = result.data
  $ ->
    $("#num-stargazers").text numStargazers.length
    return
  return

# Tags (number for last release/tag)
# ------------------------------
$.ajax
  url: "https://api.github.com/repos/softlayer/softlayer-python/tags?callback?"
  dataType: "jsonp"
  success: (json) ->
    lastTag = json.data[0]
    $("#num-version").text lastTag.name
    return

# Watchers (a count of watchers/subscribers)
# ------------------------------
$.getJSON "https://api.github.com/repos/softlayer/softlayer-python/subscribers?callback=?", (result) ->
  numWatchers = result.data
  $ ->
    $("#num-watchers").text numWatchers.length
    return
  return
