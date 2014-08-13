# Indexing

A simple, built-in table of contents generator for page navigation. It plays nicely with [Jekyll](http://jekyll rb.com) and [Redcarpet](https://github.com/vmg/redcarpet). In basic terms, this script works by looking for headers stamped with an `id=""`.

<a href="http://caleorourke.github.io/indexing" target="_blank">Indexing Demo</a>

## Prerequisites

Indexing requires jQuery 1.11.0 or greater.

## Configure

1. Reference `indexing.js` in any template you'd like to show a table of contents in. You can also bundle it with other JS files if you use a build process.

    ~~~html
    <script src="indexing.js"></script>
    ~~~

2. Create an HTML element wherever you want your table of contents to appear.

    ~~~html
    <ul class="indexing"></ul>
    ~~~

3. Call the `indexing()` function when the DOM is ready. Be sure to place this call __after__ the jQuery library.

    ~~~html
    <script>
        $(document).ready(function() {
            $(".indexing").indexing();
        });
    </script>
    ~~~

## Customize

You can easily tailor the following option to make Indexing work for your site.

### Headers

By default, this script works by looking for `h1` headers stamped with an `id=""`. You can modify this by changing the target header on `line 11` in the script.

~~~js
headers = $("h1").filter(function()
~~~

### Line Items

By default, the table of contents renders as `<li>` line items. You can modify this by changing the tags on `line 35` in the script.

~~~js
html += "<li><a href='#" + header.id + "'>" + header.innerHTML + "</a>";
~~~

## Redcarpet

Redcarpet (with Jekyll) will automatically stamp an `id` to each heading if the `with_toc_data` option is included in `_config.yml`.

~~~yml
markdown: redcarpet
redcarpet:
    extensions: [with_toc_data]
~~~

## Contribute

1. Fork it from GitHub: `http://github.com/caleorourke/indexing/fork`
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am "add some sweet features"`
4. Push to the branch: `git push origin my-new-feature`
5. Create new Pull Request in GitHub

## License

Our code and documentation is licensed under the MIT license. By contributing your code, you agree to license your contribution under the terms of this license.
