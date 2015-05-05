// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: flow-2.js
includes: [compareArray.js]
---*/

var test = [];

loop1:
for (i of [1,2,3]) {
    break;
    test.push(i);
}

if (!compareArray(test, [])) {
    $ERROR('array test is not equal to []');
}
