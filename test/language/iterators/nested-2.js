// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: nested-2.js
includes: [compareArray.js]
---*/

var simpleIterator = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    done: i > 2,
                    value: i++
                };
            }
        };
    }
};

var i = 0;
var test = [];

for (result of simpleIterator) {
    for (result of simpleIterator) {
        test.push(result);
    }
}

if (!compareArray(test, [1,2])) {
    $ERROR('expected array test value to equal [1,2], got [' + test + '] instead');
}
