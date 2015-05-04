// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-1.js
includes: [compareArray.js]
---*/

var string = "\uD7FFt";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, ["\uD7FF", "t"])) {
    $ERROR('array test is not equal to ["\uD7FF", "t"]');
}
