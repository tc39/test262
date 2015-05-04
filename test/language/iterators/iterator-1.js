// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: iterator-1.js
includes: [compareArray.js]
---*/

var simpleIterator = {
    [Symbol.iterator]: function() {
        return {
            i: 0,
            next: function() {
                return {
                    done: this.i == 2,
                    value: this.i++
                };
            }
        };
    }
};

var test = [];

for (result of simpleIterator) {
    test.push(result);
}

if (!compareArray(test, [0, 1])) {
    $ERROR('array test is not equal to [0,1]');
}
