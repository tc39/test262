// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on user defined function's prototype"
includes: [runTestCase.js]
---*/

function testcase() {

    function foobar() {
        this.x = 10;
    }

    return foobar.prototype.__proto__ === Object.prototype
}
runTestCase(testcase);
