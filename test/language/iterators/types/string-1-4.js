// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: string-1-4.js
includes: [compareArray.js]
---*/

var string = "\uD800\uDBFFf";
var test = [];

for (result of string) {
    test.push(result);
}

if (!compareArray(test, ["\uD800","\uDBFF","f"])) {
    $ERROR('array test is not equal to ["\uD800","\uDBFF","f"]');
}
