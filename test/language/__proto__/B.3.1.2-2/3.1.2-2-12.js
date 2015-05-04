// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Put]] __proto__ on this"
includes: [runTestCase.js]
---*/

function testcase() {

    var proto = { y: true };

    function foobar() {
        this.__proto__ = proto;
    }

    var f = new foobar();
    return f.__proto__ === proto && f.y === true;
}
runTestCase(testcase);
