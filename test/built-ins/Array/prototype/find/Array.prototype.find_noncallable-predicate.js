// Copyright (c) 2014 Matthew Meyers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.find should throw a TypeError if
    IsCallable(predicate) is false
includes: [runTestCase.js]
---*/

var uncallableValues = [
    undefined,
    null,
    true,
    this,
    {},
    'string',
    0
];

function testcase() {
    for (var i = 0, len = uncallableValues.length; i < len; i++) {
        try {
            [].find(uncallableValues[i]);
            return false;
        } catch (e) {
            if (!(e instanceof TypeError)) {
                return false;
            }
        }
    }
    return true;
}

runTestCase(testcase);
