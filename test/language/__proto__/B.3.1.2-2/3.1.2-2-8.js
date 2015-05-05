// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on built-in arguments object"
includes: [runTestCase.js]
---*/

function testcase() {

    function foo(a) {
        arguments.__proto__ = { x: 10 };
        return arguments.x === 10;
    }
    return foo();
}
runTestCase(testcase);
