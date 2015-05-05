// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ Assign arguments.__proto__ to Array.prototype"
includes: [runTestCase.js]
---*/

function testcase() {

    function foo() {
        arguments.__proto__ = Array.prototype

        //verify proto
        if (arguments.__proto__ !== Array.prototype)
            return false;

        if (typeof arguments.splice !== 'function' || typeof arguments.unshift !== 'function'
            || typeof arguments.join !== 'function')
            return false;

        try {
            if (arguments.join(',') !== "1,2,3")
                return false;

            return true;
        } catch (e) {}

        return false

    }

    return foo(1,2,3);
}
runTestCase(testcase);
