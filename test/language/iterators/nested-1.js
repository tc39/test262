// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: nested-1.js
includes: [compareArray.js]
---*/

var test = [];

for (x of [1,2,3]) {
    for (y of [x]) {
        test.push(y);
    }
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('expected array test value to equal [1,2,3], got [' + test + '] instead');
}
