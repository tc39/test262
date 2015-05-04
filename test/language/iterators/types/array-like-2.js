// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: array-like-2.js
includes: [compareArray.js]
---*/

var finalResult = 0;
var results = [];

var base = function(){};
base.prototype = Array.prototype;
base.prototype[0] = 0;
base.prototype[1] = 1;
base.prototype[2] = 2;

var test = new base();
test.length = 3;

for (result of test) {
    finalResult++;
    results.push(result);
}

if (finalResult !== 3) {
    $ERROR('expected finalResult to have value 3, got ' + finalResult + ' instead');
} else if (!compareArray(results, [0,1,2])) {
    $ERROR('expected results to have value [0,1,2], got [' + results + '] instead');
}
