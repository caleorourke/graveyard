#
# * Drawer
# * Enables the sliding maneuverability for the sidebar
# *
# * Copyright (c) 2014 SoftLayer, an IBM Company
# * Released under the MIT license
#

menuToggle = document.getElementById("menu-toggle")
menuActive = document.getElementById("menu")
body = document.body

menuToggle.onclick = ->
  unclassy.toggle body, "pushed-right"
  unclassy.toggle menuActive, "opened"
  return
