// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-manual-1.js
includes: [compareArray.js]
---*/

var test = [];
var done = false;
var iterator = String.prototype[Symbol.iterator].call("\uD800\uE000f");

while (!done) {
    var iteratorResult = iterator.next();
    if (iteratorResult.done) {
        done = true;
        continue;
    }
    test.push(iteratorResult.value);
}

if (!compareArray(test, ["\uD800","\uE000","f"])) {
    $ERROR('array test is not equal to ["\uD800","\uE000","f"]');
}
