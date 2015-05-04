// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: uint16array-3.js
includes: [compareArray.js]
---*/

var test = [];
var arr = new Uint16Array([1,2,3]);

for (result of arr.keys()) {
    test.push(result);
}

if (!compareArray(test, [0,1,2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
