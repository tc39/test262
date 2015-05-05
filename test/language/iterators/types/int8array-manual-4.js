// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: int8array-manual-4.js
includes: [compareArray.js]
---*/

var test = [];
var done = false;
var iterator = Int8Array.prototype.values.call([1,2,3]);

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
