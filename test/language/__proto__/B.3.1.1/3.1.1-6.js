// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Modification of Object.prototype.__proto__. Setting it to
    {value:null}
includes: [runTestCase.js]
---*/

function testcase() {
    Object.defineProperty(Object.prototype, "__proto__", {value:null});

    var obj = new Object();
    obj.__proto__ = { y: 2 };
    return obj.y === undefined;

}
runTestCase(testcase);
