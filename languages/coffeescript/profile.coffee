#
# * Profile
# * Builds a GitHub profile out of payloads for repos, contributors, stargazers, watchers, and tags
# *
# * Copyright (c) 2014 SoftLayer, an IBM Company
# * Code and documentation licensed under MIT
#

# Contributors (total contributors)
# ------------------------------

$.getJSON "https://api.github.com/repos/softlayer/softlayer-python/contributors?callback=?", (result) ->
  numContributors = result.data
  $ ->
    $("#github-contributors").text numContributors.length
    return
  return

# Stargazers + Watchers (total stargazers and watchers)
# ------------------------------

$.ajax
  url: "https://api.github.com/repos/softlayer/softlayer-python?callback?"
  dataType: "jsonp"
  success: (json) ->
    numStargazers = json.data  # Stargazers
    $("#github-stargazers").text numStargazers.stargazers_count

    numWatchers = json.data  # Watchers
    $("#github-watchers").text numWatchers.subscribers_count
    return

# Tags (number for last release/tag)
# ------------------------------

$.ajax
  url: "https://api.github.com/repos/softlayer/softlayer-python/tags?callback?"
  dataType: "jsonp"
  success: (json) ->
    lastTag = json.data[0]
    $("#github-version").text lastTag.name
    return

# Repos (repo data for an entire org)
# ------------------------------

(($) ->
  repoUrl = (repo) ->
    repoUrls[repo.name] or repo.html_url

  repoDescription = (repo) ->
    repoDescriptions[repo.name] or repo.description

  addRepo = (repo) ->
    $item = $("<li>").addClass("repo name " + (repo.language or "").toLowerCase())
    $link = $("<a>").attr("href", repoUrl(repo)).attr("target", "_blank").appendTo($item)
    $link.append $("<h2>").text(repo.name)
    $link.append $("<p>").text(repoDescription(repo))
    $link.append $("<h4>").text(repo.language)
    $link.append $("<h5>").text(repo.watchers)
    $link.append $("<h6>").text(repo.forks)
    $item.appendTo "#repos"
    return

  addRepos = (repos, page) ->
    repos = repos or []
    page = page or 1
    uri = "https://api.github.com/orgs/softlayer/repos?callback=?" + "&per_page=50" + "&page=" + page
    $.getJSON uri, (result) ->
      if result.data and result.data.length > 0
        repos = repos.concat(result.data)
        addRepos repos, page + 1
      else
        $ ->
          $.each repos, (i, repo) ->
            repo.pushed_at = new Date(repo.pushed_at)  # converts pushed_at to Date
            weekHalfLife = 1.146 * Math.pow(10, -9)
            pushDelta = "new Date" - Date.parse(repo.pushed_at)
            createdDelta = "new Date" - Date.parse(repo.created_at)
            weightForPush = 1
            weightForWatchers = 1.314 * Math.pow(10, 7)
            repo.hotness = weightForPush * Math.pow(Math.E, -1 * weekHalfLife * pushDelta)
            repo.hotness += weightForWatchers * repo.watchers / createdDelta

          repos.sort (a, b) ->  # Sort by highest # of watchers
            return 1  if a.hotness < b.hotness
            -1  if b.hotness < a.hotness

          $.each repos, (i, repo) ->
            addRepo repo

          repos.sort (a, b) ->  # Sort by recently pushed_at
            return 1  if a.pushed_at < b.pushed_at
            -1  if b.pushed_at < a.pushed_at

  repoUrls = "": ""           # Drop in any repo names & URL's here if it's not listed under your organization
  repoDescriptions = "": ""   # Drop in the same repo names as above and include the repo description here
  addRepos()

) jQuery
