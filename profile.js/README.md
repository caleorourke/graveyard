# Profile

Profile is a one-page template for showcasing GitHub open source repositories. Its panel-like design and interface works perfectly for [GitHub Pages](http://pages.github.com) and [Jekyll](http://jekyllrb.com), but its core JS and CSS libraries can essentially be deployed in a number of clever ways.

<a href="http://caleorourke.github.io/profile" target="_blank">Profile on GitHub</a>

## Prerequisites

Profile requires **jQuery 1.11.0** and **Font Awesome 4.1.0**. Use Cloudflare CDNJS to bootstrap these libraries.

~~~html
<!-- Font Awesome -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.1.0/css/font-awesome.min.css">

<!-- jQuery -->
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
~~~

## Setup

1. Update the URI in `profile.js` to match your GitHub org name.

    ~~~js
    uri = "https://api.github.com/orgs/-->name goes here<--/repos?callback=?"
    ~~~

2. Reference `profile.js` in any template or boilerplate where you would like to show off your GitHub projects. You can also bundle it with other JS files if you use a build process.

    ~~~html
    <script src="profile.js"></script>
    ~~~

3. Create an ordered list with the ID of `repos` wherever you want your projects to appear.

    ~~~html
    <ol id="repos"></ol>
    ~~~

## Limitations

GitHub limits the number of API calls to 60 per hour **without** OAuth. If you're expecting more traffic than this, we suggest adding OAuth to prevent overage.

## License

Our code and documentation is licensed under the MIT license. By contributing your code, you agree to license your contribution under the terms of this license.
