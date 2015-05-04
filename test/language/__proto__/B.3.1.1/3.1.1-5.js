// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Reassiging to original value
includes: [runTestCase.js]
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    Object.defineProperty(Object.prototype, "__proto__", desc);

    var obj = new Object();
    obj.__proto__ = { y: 2 };
    return obj.y === 2
}
runTestCase(testcase);
