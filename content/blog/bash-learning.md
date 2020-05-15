---
path: bash-script/learning
date: 2020-05-13T17:08:26.937Z
title: "String in Bash with Weak Quoting && Strong Quoting"
description: cách sử dụng biến trong ""
---
# Weak Quoting

```bash
    string = "World"
    echo " Ola, $string"
    #>Ola, World
```
# Strong Quoting

```bash
    string = "World"
    echo 'Ola, $string'
    #>Ola, $string
```