// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: set-1-3.js
includes: [compareArray.js]
---*/

var test = [];
var set = new Set();

set.add(3);
set.add(2);
set.add(1);

for (result of set.keys()) {
    test.push(result);
}

if (!compareArray(test, [3,2,1])) {
    $ERROR('array test is not equal to [3,2,1]');
}
