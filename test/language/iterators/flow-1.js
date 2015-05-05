// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: flow-1.js
includes: [compareArray.js]
---*/

var test = [];

loop1:
for (i of [1,2]) {
   loop2:
   for (j of [1,2,3]) {
      if (i === 1) {
         continue loop1;
      } else {
         test.push(j);
      }
   }
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
