---
layout: pages
heading: Product Planning
intro: Transform strategic objectives into tactical inertia.
date: Jan 31, 2015
order: 5
baseurl: "../../"
---

Even the simplest product can be a huge undertaking when you `consider` that it takes just one wrong turn to throw everything off course. But rather than trying to make course correction along the way, these sections help identify the best course in hopes of getting you there smoothly and intact.

---

# Takeaways

Before jumping in, browse through these takeaways to get a better understanding of the underlying context.

1. Doing 100% of something is better than waiting for 100% of everything.
2. Finding a reason "to" is always more important than finding a reason "not to".
3. The longer it takes to develop, the less likely it is to launch.
4. You cannot be a God and expect not to get blamed for anything that isn’t right. The same goes for anyone leading a project.
5. Flexibility leads to vulnerability. The more flexibility you have, the more control you need to prevent abuse.
6. Good judgment comes from experience, and experience comes from bad judgment.
7. Everything doesn't need to be talked about.
8. No one ever said progress was pretty.
9. Customers are the highest-ranking stakeholders.
10. The most accurate way to tell how long a project will take is after it’s done.

---

# Planning Approach

There are two dominant approaches to planning: "top-down" and "bottom-up".

## Top-Down

Top-down allows you to start planning early when very little is known, or in certain circumstances where a feature-set cannot be frozen. This means teams can start work with minimal requirements up-front. It also provides an analogous form of planning using parameters such as relative sizing, milestones, and supports a “pull by demand” system.

## Bottom-Up

Bottom-up requires heavy up-front requirements, demands a frozen feature-set, and often has a hefty approval process. It's the more attractive approach for people that have no skin in the game, but it's slow release cycle is known to kill team morale.

The {{site.github.name}} encourages use of the **top-down** approach.

---

# Continuous Planning

> "I have always found that plans are useless, but planning is indispensable." —-- Dwight D. Eisenhower

Plans change; that much is inevitable. However, teams often work off the initial plan---not because they're tenacious, but because they're either uninformed or don't fully understand the change. Setting a pattern for __continuous planning__ is an effective way to dampen the confusion. Below are a number of practices to help you get started.

* Use iterations with arbitrary time-boxing (e.g., not expecting a potentially shippable product at each bookend)
* Don't commit to half-baked plans
* Identify blocking issues early and do something about them before it's uncontainable
* Start with less---invite crucial teams members early, herd the rest later
* Define Exit Criteria early
* Whenever a decision to change is made, nominate someone to inform all teams members
* Have a source for Change Requests and keep track of their origins

## Meta-Elements

When you get into the thick of it all, keep the following meta-elements in mind while planning.

| Meta-Elements | Examples |
| ------------- | -------- |
| Critical Path | <ul><li>Frequency</li><li>Certifications or Renewals</li><li>Business Rules</li><li>Revenue Protection</li></ul> |
| Distribution | <ul><li>Lead Time</li><li>Vendor Alignment</li></ul> |
| Documentation | <ul><li>Release Notes</li><li>Exit Criteria</li><li>Test Cases</li><li>Specifications</li></ul> |
| Planning Attributes | <ul><li>Priorities</li><li>Requirements</li><li>Effort Sizing</li><li>Release Cycles</li></ul> |

## Fuzzy Up-Front

Requirements and risks are obviously important. How much time you spend on these in the early stages, though, can kill the momentum to build it.

### Requirements

Gathering all the requirements up-front and having them set in stone condemns the product to being only as good as the initial concept---instead of being better after peers and team members have learned or discovered new things.

### Risks

_Some people really do search for reasons to block a project like there's some reward for it_. However, the {{site.github.name}} discourages the kinds of ceremonial brainstorming sessions where everyone discusses every possible risks before work can start. Instead, with a more adaptive approach, you should:

* Monitor activity regularly throughout the release
* Ask about potential risks when you sync with your team
* If a risk has the potential of becoming an issue, communicate it to everyone on the team
* Each team members must inform their own leads---your job is not to inform them on their behalf
* Know the difference between a red flag and a red herring
* Use one of the four methods when handling a risk: accept it, avoid it, transfer it, or defer it

---

# Iterations

> "The only reason for time is so that everything doesn't happen at once." --- Albert Einstein

Three approaches to iteration planning are "velocity-driven", "commitment-driven", and "value-driven".

## Velocity-driven

This demands that all teams, as a whole, have a quantitative, time-boxed, and consistent measurement of work effort. This is a sunny-day approach, though, that only works for small, normalized teams working on a single product. This won't work for a team that adds people routinely as the project gains traction internally.

The "snowball effect" is a good way to illustrate this. As it rolls, the ball picks up more snow, gains more mass and surface area, and continues to pick up more snow and momentum as it rolls along. The key here is __momentum__. In physics, momentum (*p*) is mass (*m*) times velocity (*v*), or *p=mv*. As the team grows and shrinks in size, it impacts both momentum and velocity. 

To put it another way:

* If you need consistent velocity, and your team size increases, your momentum increases -- e.g. *10<sub>(m)</sub> &middot; 25<sub>(v)</sub> = 250<sub>(p)</sub>*
* If you need consistent velocity, and your team size decreases, your momentum decreases -- e.g. *7<sub>(m)</sub> &middot; 25<sub>(v)</sub> = 175<sub>(p)</sub>*

This may seem irrelevant, but remember [Rule #9: Maintain Momentum]({{page.baseurl}}pages/product-essentials/#constructs). In order to keep consistent momentum, you have to adjust velocity regularly as the teams grows and shrinks.

## Commitment-driven

Only those tasks pulled in for you to work on are those you'll deliver. Albeit a more flexible approach than velocity, it has one distinguishing flaw: commitment. _The core Lean principles emphasize the need to defer commitment for work that isn't ready or is still awaiting a key decision_. It's no different than committing your team to building a house without knowing if it's supposed to be one-story or two. You can certainly start the building process, but your work might stop abruptly at a certain point if that decision still hasn't been made.

## Value-driven

Value-driven means we pull in the work by priorities in order to delivery high-value, high-quality software capabilities to users. This provides incremental fielding and resource-effective sustainment. It also dismisses value engineering techniques where features are built based on how many and how fast we can build them, rather than how customers will receive them.

_Overall, managing agility and rapid development at scale means managing sustainable software delivery, resolving the tensions of decision making based on short- and long-term perspectives, and meeting productivity goals_. Since the dynamics for teams and work differ from product to product, a __value-driven__ approach is the option with the most flexibility and the least likely to send us on a death march.

---

# Effort Sizing

Numerous ways to size-up projects are available, each with their own variance of accuracy. For our efforts, sizing involves relative weight in points. This technique is preferred because groups are not so forthcoming when committing to hours and days; however, groups are more willing to provide relative weights or symbols. In the end, it all comes out in the wash.

Later down the line, these sizes can be converted into man-days and help facilitators estimate where we'll land. The table below is one such example of how to convert points into man-days using the Fibonacci sequence.

| Team Days | Points |
| ---------:| ----:|
| 1/2       | 3 |
| 1        | 5 |
| 2        | 13 |
| 3        | 21 |
| 5        | 34 |
| 7        | 34 |
| 10       | 55 |
| 15       | 89 |
| 17       | 89 |

The reason that one day equates to five points is based on the average working hours in a single day. With all the meetings, responding to emails, breaks, scuttlebutt, and so on, a single team member gets about five hours of actual heads-down work done a day.

But, that's on a good day. Other days, you have longer meetings, doctor appointments, fires to put out, or you're busy debating which animals could survive terraforming on a distant planet with your colleagues. That's the beauty of applying Fibonacci. It automatically adds padding to account for those risks, delays, and other life-events that no one plans for.

## Epics

> "When eating an elephant, take one bite at a time." --- Creighton Abrams

Projects beyond the 89-point marker are __Epics__. For sanity reasons, Epics should never be estimated in this manner. Instead, they should be sashimied into smaller __Themes__ or __Stories__ to make it easier to digest. From there, the total can be rolled back up to the Epic.

## Ideal vs. Elapsed Time

A football game consists of four 15-minute quarters. So, why do games run for three hours?

This is the difference between ideal time and elapsed time. With ideal time, the game is only an hour, but with elapsed time, it is three hours. For this purpose, always estimate using elapsed time (or duration). How long it will take to complete the work is not nearly as important as knowing when we should expect it.

---

# Kickoff

Roping in critical team members for a new project is important and should be done quickly. Conveying the project, however, is not always so elegant. When planning begins, requirements are coarse, soupy, and minuet. This is due to our necessity for flexibility over predictability throughout our planning. And while top-down gives us that layer of elasticity, this is one trade-off.

Simply put, we won't know every rivet and crevasse, and this tends to frustrate less flexible teams. These “unknowns” don't answer questions they have, which leads them to believe that you're unprepared. That's why herding all Team members is only effective when a big picture is available. Until then, bringing in smaller teams individually is much more effective.

---

# Artifacts

An artifact is a piece of accessible and tangible data (spreadsheet, whiteboard, document). In some instances, not all will be necessary. In others, it may require heavy elaboration on each of them. What is certain is all artifacts should not be produced at the same time---they're meant to be introduced progressively.

A typical project brings five distinct artifacts into play.

* Deliverables
* Exit Criteria
* Project Dashboard
* Milestones
* Requirements

---

# Meetups

Being a less ceremonial charter, {{site.github.name}} employs four types of meetups (or "syncs" in some cases), and each is broken out into two different categories: planning and update.

| Meeting | Intent | Frequency | Attendees |
| ------- | ------ | --------- | --------- |
| Review | Planning | Weekly | TBD |
| Strategy | Planning | Weekly | TBD |
| Stand-Up | Update | Daily | TBD |
| Status | Update | Bi-weekly | TBD |

---

# Premortem

Opposite of a postmortem, the premortem is a "devil’s advocate" approach for reviewing plausible weaknesses, critiquing assumptions, and actively seeking contradicting ideas or constructive input before finalizing a project rather than when it's autopsied. This includes the following items.

* __Feedback Quality.__ Is the data coming from multiple independent sources or just one source saying the same thing in different ways?
* __Wussies.__ Did everyone engage in honest, open debate, or did they deliberately avoid conflict?
* __Coercive, Self-Appointed Leaders.__ Did one person's opinion unduly influence others in a certain direction?
* __Crunch Modes.__ Was there a rush to achieve consensus that might have caused key elements to be overlooked?
* __Assumptions.__ What assumptions about your customers, your market and your industry did we make that may no longer be valid?
* __Market.__ What has changed in your industry, the world, or with your competitors in the past three to six months?
* __Making Stuff Up.__ What are you making up about this project? What voids of information are you filling in? What decisions are based on MSUs rather than on hard data?

---

# Uncertainties

Preparing and anticipating every suspected risk before the kick-off of a release cycle is a prime example of “heavy up-front” delivery. Even with all the uncertainties known up-front, s%*# happens. Below are a few uncertainties that you may have to mitigate, steer around, or simply accept as-is.

| Uncertainties | Reasons |
| ------------- | ------- |
| Scheduling | Stakeholders like schedules with a single, unqualified date. During the early part of a project, though, we are the most uncertain. And the dates we give should reflect our uncertainty by expressing the date as a quarter or a month. | Losing or Changing Team members | Shuffling Team members or pulling them for other projects usually leads to a “dip” in work until the transition normalizes. |
| Delays in Decisions | Whether it's a delay between getting requirements and getting feedback from stakeholders, or a delay between requirements and coding, or a delay between writing code and seeing if it really worked, these each carry their own uncertainty. |
| Crises | Attention may be diverted to deal with any crises that springs up, and it's important to be accommodating. Saying that we won't stop and take a hit in order to swarm on a crisis could come back to haunt us---maybe not tomorrow, or next week, or next month, but it will. |
| Unclear Definition of Done | Teams without a clear, documented definition of what done means (Exit Criteria using the “I can” technique) can't validate that their work meets the Product Manager's expectations. |
