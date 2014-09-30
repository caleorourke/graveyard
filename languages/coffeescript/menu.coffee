#
# * Menu
# * Enables the menu's sliding and collapsing behavior
# *
# * Copyright (c) 2014 SoftLayer, an IBM Company
# * Code and documentation licensed under MIT
#

menuToggle = document.getElementById("menu-toggle")
menuActive = document.getElementById("menu")
pageTOC = document.getElementById("toc")
body = document.body

menuToggle.onclick = ->
  unclassy.toggle body, "pushed-right"
  unclassy.toggle menuActive, "opened"
  unclassy.toggle menuToggle, "fixed"
  unclassy.toggle pageTOC, "hidden"
  return
