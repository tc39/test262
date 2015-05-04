// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on user defined object"
includes: [runTestCase.js]
---*/

function testcase() {

    function foobar() {
        this.x = 10;
    }
    var f = new foobar();
    return f.__proto__ === foobar.prototype;
}
runTestCase(testcase);
