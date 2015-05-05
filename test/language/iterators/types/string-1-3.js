// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-3.js
includes: [compareArray.js]
---*/

var string = "\uD800";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, ["\uD800"])) {
    $ERROR('array test is not equal to ["\D800"]');
}
