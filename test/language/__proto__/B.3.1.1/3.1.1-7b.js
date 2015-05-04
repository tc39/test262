// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Only Modification of Object.prototype.__proto__ setter
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = new Object();
    obj.__proto__ = { y: 2 };
    Object.defineProperty(Object.prototype, "__proto__", {
        set: undefined
    });
    obj.__proto__ = {y:99};

    return obj.y === 2 && obj.__proto__.y===2;
}
runTestCase(testcase);
