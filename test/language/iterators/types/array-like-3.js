// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: array-like-3.js
includes: [compareArray.js]
---*/

var finalResult = 0;
var results = [];

var base = function(){};
base.prototype = Array.prototype;

var test = new base();
test.length = 1;

for (result of test) {
    finalResult++;
    results.push(result);
}

if (finalResult !== 1) {
    $ERROR('expected finalResult to have value 1, got ' + finalResult + ' instead');
} else if (!compareArray(results, [undefined])) {
    $ERROR('expected results to have value [undefined], got [' + results + '] instead');
}
