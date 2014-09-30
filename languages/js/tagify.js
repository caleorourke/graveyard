/*
 #  Tagify
 #  Pulls in the tag/version number for the last pegged release on GitHub
 #
 #  Copyright © SoftLayer, an IBM Company
 #  Code and documentation licensed under MIT
 */


tagCallback = ("https://api.github.com/repos/caleorourke/redcarpify/tags?callback?"); /* Callback URL for GitHub's Tag API */
tagEnabled  = document.getElementById("tag"); /* Enables script if "version.enabled" in _config.yml is "Y" */

if (typeof(tagEnabled) !== undefined && tagEnabled !== null) {

    $.ajax({
        url: tagCallback,
        dataType: "jsonp",
        success: function(json) {
            lastTag = json.data[0];
            $("#github-version").text(lastTag.name);
        }
    });
};
