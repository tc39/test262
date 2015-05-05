// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: uint32array-manual-2.js
includes: [compareArray.js]
---*/

var test = [];
var done = false;
var iterator = Uint32Array.prototype.entries.call([1,2,3]);

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test[0], [0,1])) {
    $ERROR('array test is not equal to [0,1]');
}

if (!compareArray(test[1], [1,2])) {
    $ERROR('array test is not equal to [1,2]');
}

if (!compareArray(test[2], [2,3])) {
    $ERROR('array test is not equal to [2,3]');
}
