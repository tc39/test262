// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on user defined objects & overriden property"
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

    if (c.x !== 10 || c.y !== true || c.z !== 30)
        return false;

    c.__proto__ = { y: 2 };

    return c.x === undefined && c.y === 2 && c.z === 30
}
runTestCase(testcase);
