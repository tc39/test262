// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: map-1-4.js
includes: [compareArray.js]
---*/

var test = [];
var map = new Map();

map.set(1, "black");
map.set("colors", 2);

for (result of map.values()) {
    test.push(result);
}

if (!compareArray(test, ["black", 2])) {
    $ERROR('array test is not equal to ["black", 2]');
}
