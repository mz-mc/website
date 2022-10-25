---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
image:
link:
# filter types
types: ["web design", "joomla"]
# client categories
client_cat: ["mzmc", "produce report"]
# show in lists but don't render as published page
_build:
  list: true
  render: false
---

