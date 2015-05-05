// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: hoist-2-3.js
---*/

var simpleIterator = {
    [Symbol.iterator]: function() {
        return {
            i: 2,
            next: function() {
                return {
                    done: this.i == 3,
                    value: this.i++
                };
            }
        };
    }
};

// Check for hoisting
try {
    if (_test !== undefined) {
        $ERROR('expected _test to have value undefined, got ' + _test + ' instead');
    }
} catch (e) {
    $ERROR('expected _test to be in the scope');
}

// Test
for (test of simpleIterator)
    var _test = test;

// Check after value & hoisting
try {
    if (_test !== 2) {
        $ERROR('expected _test to have value 2, got ' + _test + ' instead');
    }
} catch (e) {
    $ERROR('expected _test to be in the scope');
}
