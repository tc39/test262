// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ in eval"
includes: [runTestCase.js]
---*/

function testcase() {
    var proto = { y: 2 };
    var obj = { x: 1 };
    eval(Object.defineProperty(obj, '__proto__', {value: proto}));

    return obj.__proto__ === proto;
}
runTestCase(testcase);
