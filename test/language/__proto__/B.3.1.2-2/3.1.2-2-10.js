// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Put]] __proto__ Assign function.prototype.__proto__ to
    Array.prototype for user defined function
includes: [runTestCase.js]
---*/

function testcase() {


    function foo() {
    }
    foo.prototype.__proto__ = Array.prototype;

    var obj = new foo();

    if (typeof obj.splice !== 'function' || typeof obj.unshift !== 'function'
        || typeof obj.join !== 'function')
        return false;

    return true;
}
runTestCase(testcase);
