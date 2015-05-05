// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Only Modification of Object.prototype.__proto__ getter
includes: [runTestCase.js]
---*/

function testcase() {

    Object.defineProperty(Object.prototype, "__proto__", {
        get: undefined
    });

    var obj = new Object();
    obj.__proto__ = { y: 2 };
    return obj.y === 2 && obj.__proto__ === undefined;
}
runTestCase(testcase);
