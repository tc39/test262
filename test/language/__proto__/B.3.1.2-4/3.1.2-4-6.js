// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ on function arguments"
includes: [runTestCase.js]
---*/

function testcase() {

    function foo() {
        var proto = { y: 2 };
        Object.defineProperty(arguments, '__proto__', { value: proto});
        return arguments.__proto__ === proto && arguments.__proto__.y === 2;
    }

    return foo();
}
runTestCase(testcase);
