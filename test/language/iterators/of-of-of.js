// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: of-of-of.js
includes: [compareArray.js]
---*/

var i = 0;
var of = {
    next: function() {
        return {
            done: i == 3,
            value: i++
        };
    },
    [Symbol.iterator]: function() {
        return of;
    }
};

var test = [];

// Test
for (of of of) {
    test.push(of);
}

if (!compareArray(test, [0, 1, 2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
