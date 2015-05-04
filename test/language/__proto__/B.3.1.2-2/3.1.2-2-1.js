// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    set Assign Object.prototype.__proto__ = {} results in Cyclic
    assignment
includes: [runTestCase.js]
---*/

function testcase() {
    try {
        Object.prototype.__proto__ = {};
    } catch (e) {
        if (e instanceof TypeError) {
            return true;
        }
    }
    return false;
};

runTestCase(testcase);
