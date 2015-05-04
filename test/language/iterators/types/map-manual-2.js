// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: map-manual-2.js
includes: [compareArray.js]
---*/

var test = [];
var done = false;
var iterator = Map.prototype.entries.call(new Map([[1, "black"], ["colors", 2]]));

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test[0], [1, "black"])) {
    $ERROR('array test is not equal to [1,"black"]');
}

if (!compareArray(test[1], ["colors",2])) {
    $ERROR('array test is not equal to ["colors",2]');
}
