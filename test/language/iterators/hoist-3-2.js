// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: hoist-3-2.js
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
    _test;
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('_test is unexpectedly present in the scope');
} else if (error.name !== 'ReferenceError') {
    $ERROR('expected to have ReferenceError, got ' + error.name + ' instead');
}

// Test
for (test of simpleIterator) {
    const _test = test;
}

// Check for hoisting
try {
    _test;
} catch (e) {
    error = e;
}

if (error === undefined) {
    $ERROR('_test is unexpectedly present in the scope');
} else if (error.name !== 'ReferenceError') {
    $ERROR('expected to have ReferenceError got ' + error.name + ' instead');
}
