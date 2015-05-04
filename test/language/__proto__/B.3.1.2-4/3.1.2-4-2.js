// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[DefineOwnProperty]] __proto__ own property on user Object."
includes: [runTestCase.js]
---*/

function testcase() {
    var proto = {z:3};
    var obj = { x: 1 };
    obj.__proto__ = { y: 2 };

    Object.defineProperty(obj, '__proto__', { value: proto });

    return obj.x === 1 && obj.y === 2 && obj.__proto__ === proto;
}
runTestCase(testcase);
