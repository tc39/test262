// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Get]] for __proto__ on arguments object"
includes: [runTestCase.js]
---*/

function testcase() {

    function foobar() {
        return arguments.__proto__ === Object.prototype;
    }
    return foobar();
}
runTestCase(testcase);
