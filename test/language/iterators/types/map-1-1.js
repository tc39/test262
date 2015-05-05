// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: map-1-1.js
includes: [compareArray.js]
---*/

var test = [];
var map = new Map();

map.set(1, "black");
map.set("colors", 2);

for (result of map) {
    test.push(result);
}

if (!compareArray(test[0], [1, "black"])) {
    $ERROR('array test is not equal to [1,"black"]');
}

if (!compareArray(test[1], ["colors",2])) {
    $ERROR('array test is not equal to ["colors",2]');
}
