---
layout: pages
heading: Getting Started
intro: Shift focus toward creating better products.
date: March 13, 2015
order: 1
baseurl: "../../"
---

> "Life's too short to build something no one wants." --- Ash Maurya, Founder, *Spark59* and Author, *Running Lean*

Many of us in the field of product development realize that creating products has more in common with art and philosophy than with applied sciences. And by inching ourselves away from mechanized methods, we’re able to explore creative solutions and contribute more to the product experience as a whole. This charter provides practical concepts to help improve how you make products going forward.

---

# About {{site.github.name}}

{{site.github.name}} pushes products beyond the traditional boundaries of a project---starting from ideation, to development, to adoption, to incremental improvement. It derives from the bits of several methods:

* Lean/Kanban
* Agile/Scrum
* Practical Product Management (Pragmatic Marketing)
* Design Thinking

## Prototyping to Delivery

At its core, {{site.github.name}} places emphasis on __prototyping__, __balanced teams__, __customer discovery__, and __reduced cycles__, with the intent of:

* Clearly defining how we manage products through their lifecycles
* Incrementally adding new practices and workflows
* Identifying and refactoring bad or incomplete processes
* Encouraging teams to be __visible__, __adaptable__, and __coordinated__
* Providing a solid content platform for planning, requirements, and knowledge sharing

![Stack](https://farm6.staticflickr.com/5613/15533499465_ef3fc6f5fa_z.jpg)

## A Living Charter

Do note that nothing here is set in stone. This as a "living" charter. As we continue to learn more about our industry and ourselves, the {{site.github.name}} will evolve.

---

# Argument for Change

The argument for change originates from years of self-inflicted wounds sustained by fast-tracking projects and short-sighted technical decisions. Of these, the most visible scars include:

* Committing to work without getting what you need upfront
* Constant task-switching
* Getting assigned to tasks, yet never given the whole picture
* Launching products publicly without informing critical Operational teams
* Being interrupted to put out fires and still expected to finish your projects on-time
* Cutting corners and covering up technical debt in order to sustain a consistent burn velocity

---

# Principles and Actions

Before you read any further, we should discuss the differences between "practice of principle" and "practice of action", and there's no better way to do this than with *The Art of War*.

<q>"Principle is when you have arrived at mastery. You no longer struggle with anything. However, if you don’t do practice of action, you will only have principle in mind."</q>

This means you can never fully master the context (principles) of this charter until you put them to use (action). You can memorize it, teach it, even sing it upside-down while juggling, but until you put them into action, you'll never get the understanding and know-how that comes from experience.

---

# Contents

Click on any of the subjects below to start reading.

{% assign page-links = site.pages | sort:"order" %}
{% for node in page-links %}
  {% if node.heading != null %}
    {% if node.order != 1 %}
      {% if node.layout == "pages" %}

* [{{node.heading}}]({{site.baseurl}}{{node.url}}) --- {{node.intro}}

      {% endif %}
    {% endif %}
  {% endif %}
{% endfor %}
