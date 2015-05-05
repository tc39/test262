// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ on parent of the object"
includes: [runTestCase.js]
---*/

function testcase() {
    var proto = { y: 2 };
    var base = { x: 1 };
    Object.defineProperty(base, '__proto__', { value: proto })

    var obj = Object.create(base);

    return obj.__proto__ === proto;
}
runTestCase(testcase);
