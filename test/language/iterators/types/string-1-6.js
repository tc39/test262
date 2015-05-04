// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-6.js
includes: [compareArray.js]
---*/

var string = "\uD800\uDC00f";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, ["\uD800\uDC00", "f"])) {
    $ERROR('array test is not equal to ["\uD800\uDC00","f"]');
}
