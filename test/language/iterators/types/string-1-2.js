// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-2.js
includes: [compareArray.js]
---*/

var string = "\uE000t";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, ["\uE000", "t"])) {
    $ERROR('array test is not equal to ["\uE000", "t"]');
}
