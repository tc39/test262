// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: set-1-2.js
includes: [compareArray.js]
---*/

var test = [];
var set = new Set();

set.add(3);
set.add(2);
set.add(1);

for (result of set.entries()) {
    test.push(result);
}

if (!compareArray(test[0], [3,3])) {
    $ERROR('array test is not equal to [3,3]');
}

if (!compareArray(test[1], [2,2])) {
    $ERROR('array test is not equal to [2,2]');
}

if (!compareArray(test[2], [1,1])) {
    $ERROR('array test is not equal to [1,1]');
}
