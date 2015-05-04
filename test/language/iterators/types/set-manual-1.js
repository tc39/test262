// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: set-manual-1.js
includes: [compareArray.js]
---*/

var test = [];
var done = false;
var iterator = Set.prototype[Symbol.iterator].call(new Set([3,2,1]));

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test, [3,2,1])) {
    $ERROR('array test is not equal to [3,2,1]');
}
