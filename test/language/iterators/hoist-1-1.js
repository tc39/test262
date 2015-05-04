// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: hoist-1-1.js
---*/

var error;
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
    test;
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('test is unexpectedly present in the scope');
} else if (error.name !== 'ReferenceError') {
    $ERROR('expected to have ReferenceError, got ' + error.name + ' instead');
}

// Test
for (test of simpleIterator) {}

// Check after value & hoisting
try {
    if (test !== 2) {
        $ERROR('expected test to have value 2, got ' + test + ' instead');
    }
} catch (e) {
    $ERROR('expected test to be in the scope');
}
