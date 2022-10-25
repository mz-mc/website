---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: false
# add below so that hugo doesn't make public pages for each client but can still display their resources 
_build:
  list: true
  publishResources: true
  render: false
---