#
# * Scrollability
# * On-page scrolling thresholds for animation
# *
# * Copyright (c) 2014 SoftLayer, an IBM Company
# * Code and documentation licensed under MIT
#

# Shows and conceals the "back to top" button

pageOffset = document.documentElement.scrollTop or document.body.scrollTop

scrollTo = (element, to, duration) ->
  start = element.scrollTop
  change = to - start
  currentTime = 0
  increment = 20
  animateScroll = ->
    currentTime += increment
    val = Math.easeInOutQuad(currentTime, start, change, duration)
    element.scrollTop = val
    setTimeout animateScroll, increment  if currentTime < duration
    return

  animateScroll()
  return

window.onscroll = ->
  if pageYOffset >= 200
    document.getElementById("top").style.visibility = "visible"
  else
    document.getElementById("top").style.visibility = "hidden"
    return
  document.getElementById("top").onclick = ->
    scrollTo document.body, 0, 0
    return
  return

Math.easeInOutQuad = (t, b, c, d) ->
  t /= d / 2
  return c / 2 * t * t + b  if t < 1
  t--
  -c / 2 * (t * (t - 2) - 1) + b
