// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[DefineOwnProperty]] UnderScoreProtoEnabled is set to false when
    Object.prototype.__proto__ attribute {configurable} changed to
    false
includes: [runTestCase.js]
---*/

function testcase() {
    Object.defineProperty(Object.prototype, "__proto__", {configurable: false, writable:true});
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

    var obj = {};
    obj.__proto__ = { x: 10 };
    return  (obj.x === undefined) && (obj.__proto__.x === 10);
}
runTestCase(testcase);
