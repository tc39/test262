// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Murat Sutunc
description: hoist-1-2.js
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
if (test !== undefined) {
    $ERROR('expected test to be in the scope');
}

// Test
for (var test of simpleIterator) {}

// Check after value & hoisting
try {
    if (test !== 2) {
        $ERROR('expected test to have value 2, got ' + test + ' instead');
    }
} catch (e) {
    $ERROR('expected test to be in the scope');
}
