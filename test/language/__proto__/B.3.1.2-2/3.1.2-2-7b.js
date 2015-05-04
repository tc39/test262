// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on user defined objects"
includes: [runTestCase.js]
---*/

function testcase() {

    var obj = { x: 10, y: true };
    obj.__proto__ = { x: 20 };

    function child() {
        this.z = 30;
    }
    child.prototype = obj;

    var c = new child();

    c.__proto__ = null;

    return c.x === undefined && c.y === undefined && c.z === 30
}
runTestCase(testcase);
