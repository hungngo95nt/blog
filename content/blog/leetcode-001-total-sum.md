---
path: leetCode/001
date: 2020-05-18T09:49:47.451Z
title: "LeetCode #001 Total Sum"
description: "#javascript #LeetCode001 #algorithms"
---

```js
  function twoSum(nums, target) {
    const previousValues = {}
    for (let i = 0; i < nums.length; i++) {
      const currentValue = nums[i]
      const neededValue = target - currentValue
      if (previousValues[neededValue] != null) {
        return [previousValues[neededValue], i]
      } else {
        previousValues[currentValue] = i
      }
    }
  
      return []
  }
```