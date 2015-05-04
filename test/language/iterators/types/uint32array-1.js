// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: uint32array-1.js
includes: [compareArray.js]
---*/

var test = [];
var arr = new Uint32Array([1,2,3]);

for (result of arr) {
    test.push(result);
}

if (!compareArray(test, [1,2,3])) {
    $ERROR('array test is not equal to [1,2,3]');
}
