---
layout: docs
title: Redcarpet
tagline: Get out of writing fancy code with this humanistic, editor-friendly language
order: 5
baseurl: "../../"
---

# Introduction to Redcarpet

[Markdown](http://en.m.wikipedia.org/wiki/Markdown) provides a simple, humanistic way to write web content without hardcore coding. It's a language designed to make things easier to voice or read. You still write just like you always have, only now you drop in a few symbols that will magically transform your work into HTML. However, it is not HTML, nor does it create HTML pages. Something else is responsible for transforming it into HTML. That something is [Redcarpet](https://github.com/vmg/redcarpet).

---

# Paragraphs

Now that you're acquainted with the inner-workings, let's get down to the stuff you came here for---starting with paragraphs.

Similar to Pages, Google Docs, and Word, you create paragraphs by writing one or more lines of content and separating them with blank lines. This is the simplest form of writing in Markdown because it doesn't require any symbols.

<pre>
Lorem ipsum is simply dummy text of the printing and typesetting industry.

It has been the industry's standard dummy text ever since the 1500s.

Contrary to popular belief, Lorem ipsum is not random text.
</pre>

<summary class="panel panel-example">
Lorem ipsum is simply dummy text of the printing and typesetting industry.

Lorem ipsum has been the industry's standard dummy text ever since the 1500s.

Contrary to popular belief, Lorem ipsum is not random text.
</summary>

---

# Text Effects

With Markdown, you can add the following text effects to your content.

* [Bold](#bold)
* [Italic](#italic)
* [Bold and Italic](#bold-and-italic)
* [Underline](#underline)
* [Delete (or Strikethrough)](#delete)
* [Superscript](#superscript)
* [Marked](#marked)

### Bold

Place two asterisks `**` or two underscores `__` at both ends of your content.

<pre>
Lorem ipsum is **simply dummy text** of the printing and typesetting industry. It has been the industry's standard dummy text __ever since the 1500s__.
</pre>

<summary class="panel panel-example">
Lorem ipsum is **simply dummy text** of the printing and typesetting industry. It has been the industry's standard dummy text __ever since the 1500s__.
</summary>

### Italic

Place one asterisk `*` at both ends of your content.

<pre>
Lorem ipsum is simply dummy text of the *printing* and *typesetting* industry.
</pre>

<summary class="panel panel-example">
Lorem ipsum is simply dummy text of the *printing* and *typesetting* industry.
</summary>

### Bold and Italic

Mixing bold and italic styles is not complicated. The trick is using the underscore `__` for bold styles instead of the asterisks.

<pre>
__Lorem ipsum is *simply dummy text*__ of the printing and typesetting industry. It has been the industry's standard *dummy text __ever since the 1500s__*.
</pre>

<summary class="panel panel-example">
__Lorem ipsum is *simply dummy text*__ of the printing and typesetting industry. It has been the industry's standard *dummy text __ever since the 1500s__*.
</summary>

### Underline

Place one underscore `_` at both ends of your content.

<pre>
Lorem ipsum is simply dummy text of the _printing and typesetting industry_.
</pre>

<summary class="panel panel-example">
Lorem ipsum is simply dummy text of the _printing and typesetting industry_.
</summary>

### Delete

Place two tildes `~~` at both ends of your content.

<pre>
Lorem ipsum is ~~simply dummy~~ text of the ~~printing and~~ typesetting industry.
</pre>

<summary class="panel panel-example">
Lorem ipsum is ~~simply dummy~~ text of the ~~printing and~~ typesetting industry.
</summary>

### Superscript

Put one caret `^` before each word, number, or block.

<pre>
Lorem ipsum^[1] is simply dummy text of the printing and typesetting industry.^[O'Rourke, ^2015]
</pre>

<summary class="panel panel-example">
Lorem ipsum^[1] is simply dummy text of the printing and typesetting industry.^[O'Rourke, ^2015]
</summary>

### Marked

Place two equal signs `==` at both ends.

<pre>
==Lorem ipsum== is simply ==dummy text== of the printing and typesetting industry.
</pre>

<summary class="panel panel-example">
==Lorem ipsum== is simply ==dummy text== of the printing and typesetting industry.
</summary>

---

# Punctuation

You can create the following punctuations with Markdown.

* [Em Dash](#em-dash)
* [En Dash](#en-dash)
* [Horizontal Rules](#horizontal-rules)

### Em Dash

Use three hyphens `---` to make an em dash.

<pre>
Lorem ipsum --- dummy text of the printing and typesetting industry.
</pre>

<summary class="panel panel-example">
Lorem ipsum --- dummy text of the printing and typesetting industry.
</summary>

### En Dash

Use two hyphens `--` to make an en dash.

<pre>
Lorem ipsum -- dummy text of the printing and typesetting industry.
</pre>

<summary class="panel panel-example">
Lorem ipsum -- dummy text of the printing and typesetting industry.
</summary>

### Horizontal Rules

To create horizontal rules, use three hyphens `---`, asterisks `***`, or underscores `___`.

<pre>
Hyphens

---

Asterisks

***

Underscores

___
</pre>

<summary class="panel panel-example">
Hyphens

---

Asterisks

***

Underscores

___
</summary>

---

# Blockquotes

Make a blockquote by putting a greater-than angle bracket `>` before the content. You can also mix punctuation and text effects in with your quotes.

<pre>
> Blockquotes are very handy to emulate content for quotes.
</pre>

> Blockquotes are very handy to emulate content for quotes.

<pre>
> When you are courting a nice girl, an hour seems like a second. When you sit on a red-hot cinder, a second seems like an hour. That's relativity. --- *Albert Einstein*
</pre>

> When you are courting a nice girl, an hour seems like a second. When you sit on a red-hot cinder, a second seems like an hour. That's relativity. --- *Albert Einstein*

---

# Headings

Tell Markdown what you want to be a heading and how big you want it by using hash tags `#`.

<pre>
# h1. Heading 1
## h2. Heading 2
### h3. Heading 3
#### h4. Heading 4
</pre>

### Setext Styles

Instead of using hash tags, setext styles for h1 and h2 headings are available. Put at least three equal signs `===` under your content to make h1 headings and three dashes `---` to make h2 headings.

<pre>
h1. Heading 1
===

h2. Heading 2
---
</pre>

---

# Lists

This summary shows how to create the following lists.

* [Numbers](#numbers)
* [Bullets](#bullets)
* [Numbers and Bullets](#numbers-and-bullets)

### Numbers

Create number lists by putting a number before each line.

<pre>
1. First ordered list item
2. Another item
1. Actual numbers don't matter, just that it's a number
4. And here's another
</pre>

1. First ordered list item
2. Another item
1. Actual numbers don't matter, just that it's a number
4. And here's another

### Bullets

Make a bullet list by placing either a star `*`, a hyphen `-`, or a plus `+` before the content.

<pre>
* Bullet 1
- Bullet 2
+ Bullet 3
</pre>

* Bullet 1
- Bullet 2
+ Bullet 3

### Numbers and Bullets

This example shows how to combine both lists. Notice the indents before the sub items. Use two spaces to make that indentation.

<pre>
1. First number list item
2. Another item
  * Bullet list item
3. Another number list item
  1. Another bullet list item
4. And the final number list item
</pre>

1. First number list item
2. Another item
  * Bullet list item
3. Another numbers list item
  1. Another bullet list item
4. And the final number list item

---

# Links

Creating a link is very simple with Markdown. All you have to do is put the word(s) you want to highlight in brackets `[]` and the link in parenthesis `()` next to it.

<pre>
[Visit our website](http://www.softlayer.com)

Hover over [this link](http://www.softlayer.com "SoftLayer, an IBM Company") to see the title

[Read our license on GitHub](../blob/master/LICENSE)
</pre>

<summary class="panel panel-example">
[Visit our website](http://www.softlayer.com)

Hover over [this link](http://www.softlayer.com "SoftLayer, an IBM Company") to see the title

[Read our license on GitHub](../blob/master/LICENSE)
</summary>

### Autolinks

Emulate a direct link without any words by putting angle brackets `<>` at both ends of the link. Wrap text around it to make a quick call-to-action or redirect users to another site.

`<http://www.softlayer.com>`<br>
`<sales@softlayer.com>`

---

# Images

Links and images use similar formats with only a few minor exceptions.

* Images have an exclamation mark `!` before the brackets
* A description is optional, although the brackets `[]` are still required

### Description Included

<pre>
![Company Logo](http://static.softlayer.com/images/info/sl_logo_215x19.jpg "SoftLayer, an IBM Company")
</pre>

<summary class="panel panel-example">
![Company Logo](http://static.softlayer.com/images/info/sl_logo_215x19.jpg "SoftLayer, an IBM Company")
</summary>

### No Description Included

<pre>
![](http://static.softlayer.com/images/info/sl_logo_215x19.jpg "SoftLayer, an IBM Company")
</pre>

<summary class="panel panel-example">
![](http://static.softlayer.com/images/info/sl_logo_215x19.jpg "SoftLayer, an IBM Company")
</summary>

---

# Code

This summary shows how to dress your code snippets.

* [Inline Code](#inline-code)
* [Code Blocks](#code-blocks)
* [Code Highlighting](#code-

### Inline Code

Use `back-ticks` to show inline code.

<pre>
Use `back-ticks` to show inline code.
</pre>

### Code Blocks

Fence bigger chucks of code by putting three back-ticks <code>```</code> or three tildes <code>~~~</code> at the top and bottom.

<pre>
```
if (!selector) {
  selector = $this.attr('href')
  selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
}

if ($this.parent('li').hasClass('active')) return

  var previous = $ul.find('active')[0]
  var e        = $.Event('show.active', {
  relatedTarget: previous
})
```
</pre>

<summary class="panel panel-example">
```
if (!selector) {
  selector = $this.attr('href')
  selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
}

if ($this.parent('li').hasClass('active')) return

  var previous = $ul.find('active')[0]
  var e        = $.Event('show.active', {
  relatedTarget: previous
})
```
</summary>

### Code Highlights

To make code blocks look more festive, we include highlights for dozens of programming languages, template languages, and other markup. Just add the language name after the top-set of Tildes or back-ticks if you want it highlighted.

For a complete list of supported languages, check out the [website for Highlight.js](http://highlightjs.org).

**Ruby using Tildes**

<pre>
~~~ruby
class TkFrame

  def cswap

    for loc in ['background', 'foreground', 'activebackground']
      c = @swapbut.cget(loc)
      @swapbut.configure(loc => @stopbut.cget(loc))
      @stopbut.configure(loc => c)
    end
  end

  def initialize
    super

    @swapbut = TkButton.new(self, 'command' => proc { self.cswap } ) {
      text "Swap"
      background '#EECCCC'
      activebackground '#FFEEEE'
      foreground '#990000'
      pack('side' => 'top', 'fill' => 'both')
    }
~~~
</pre>

<summary class="panel panel-example">
~~~ruby
class TwoLabs < TkFrame

  def cswap

    for loc in ['background', 'foreground', 'activebackground']
      c = @swapbut.cget(loc)
      @swapbut.configure(loc => @stopbut.cget(loc))
      @stopbut.configure(loc => c)
    end
  end

  def initialize
    super

    @swapbut = TkButton.new(self, 'command' => proc { self.cswap } ) {
      text "Swap"
      background '#EECCCC'
      activebackground '#FFEEEE'
      foreground '#990000'
      pack('side' => 'top', 'fill' => 'both')
    }
~~~
</summary>

**Python using Back-ticks**

<pre>
```python
from datetime import datetime

class TokensV2(object):
  def __init__(self, app):
    self.app = app

  def on_post(self, req, resp):
  body = req.stream.read().decode()

  index_url = self.app.get_dispatcher('identity').get_endpoint_url(req, 'v2_auth_index')
  v2_url = self.app.get_dispatcher('compute').get_endpoint_url(req, 'v2_index')
```
</pre>

<summary class="panel panel-example">
```python
from datetime import datetime

class TokensV2(object):
  def __init__(self, app):
    self.app = app

  def on_post(self, req, resp):
  body = req.stream.read().decode()

  index_url = self.app.get_dispatcher('identity').get_endpoint_url(req, 'v2_auth_index')
  v2_url = self.app.get_dispatcher('compute').get_endpoint_url(req, 'v2_index')
```
</summary>

---

# Tables

Making a table is fairly straightforward.

* The first row is always the header
* Dashes `-` separate the header from the data
* Colons `:` align the columns (and are optional)

Our first example shows all the symbols lined up neatly. Making tables look this neat is purely for readability. Symbols do not have to line up. In fact, the outer pipes `|` are not even required.

### Aligned

<pre>
| Column 1         | Column 2              | Column 3  |
| ---------------- |:---------------------:| ---------:|
| col 2 is         | centered              |     $1600 |
| col 3 is         | right-aligned         |       $12 |
| Row stripes      | improve readability   |        $1 |
| Responsiveness   | already built-in      |      FREE |
</pre>


| Column 1         | Column 2              | Column 3  |
| ---------------- |:---------------------:| ---------:|
| col 2 is         | centered              |     $1600 |
| col 3 is         | right-aligned         |       $12 |
| Row stripes      | improve readability   |        $1 |
| Responsiveness   | already built-in      |      FREE |

### Not-So Aligned

<pre>
The Not-So | Pretty | Version
--- | --- | ---
Still | looks | snazzy
Tall | Grande | Venti
Titan | Europa | Enceladus
</pre>

The Not-So | Pretty | Version
--- | --- | ---
Still | looks | snazzy
Tall | Grande | Venti
Titan | Europa | Enceladus

---

# Videos

You cannot embed videos with Markdown, but you can add an image that links back to the video. And since we're using an image as a placeholder for the video, the syntax is almost identical to the syntax for images.

<pre>
[![Title](http://img.youtube.com/vi/VideoID/0.jpg)](http://www.youtube.com/watch?v=VideoID)
</pre>

### YouTube

Here's how to add a video from YouTube.

1. Pick any video in YouTube.
2. Click the “Share” button.
3. Copy the `VideoID` from the link.
4. Paste the ID in both spots where VideoID is (and as a warning, it is case sensitive).

<pre>
[![Lefties](http://img.youtube.com/vi/1TUTwdOvAVM/0.jpg)](http://www.youtube.com/watch?v=1TUTwdOvAVM)
</pre>

<summary class="panel panel-example">
[![Lefties](http://img.youtube.com/vi/1TUTwdOvAVM/0.jpg)](http://www.youtube.com/watch?v=1TUTwdOvAVM)
</summary>
