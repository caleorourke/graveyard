/*
 #  Pegging
 #  Fetches the last pegged release from GitHub
 #
 #  Copyright © Softlayer, an IBM Company
 #  Code and documentation licensed under MIT
 */

$.ajax({
    url: "https://api.github.com/repos" + "/" + "{{site.github.owner_name}}" + "/" + "{{site.github.project_title}}" + "/" + "tags?callback?",
    dataType: "jsonp",
    success: function(json) {
        lastTag = json.data[0];
        $("#github-version").text(lastTag.name);
    }
});
