// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ in eval"
includes: [runTestCase.js]
---*/

function testcase() {
    eval('delete Object.prototype.__proto__');

    var obj = { x: 1 };
    obj.__proto__ = { y: 2 };

    return Object.prototype.__proto__ === undefined &&
        obj.y !== 2;
}
runTestCase(testcase);
