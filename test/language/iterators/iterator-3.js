// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: iterator-3.js
includes: [compareArray.js]
---*/

var iterator = {[Symbol.iterator]: function() {return x;}}
var x = {
    i: 0,
    next: function () {
        return {
            done: false,
            value: x.i++
        };
    }
};
var test = [];

for (result of iterator) {
    test.push(result);

    if (result < 2) {
        continue;
    } else {
        break;
    }
}

if (!compareArray(test, [0,1,2])) {
    $ERROR('array test is not equal to [0,1,2]');
}
