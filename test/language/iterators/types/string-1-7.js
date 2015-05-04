// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-7.js
includes: [compareArray.js]
---*/

var string = "";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, [])) {
    $ERROR('array test is not equal to []');
}
