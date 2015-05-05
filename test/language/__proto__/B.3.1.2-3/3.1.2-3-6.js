// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[delete]] __proto__ function argumensts"
includes: [runTestCase.js]
---*/

function testcase() {

    function foo() {
        delete arguments.__proto__;
        return arguments.__proto__ === Object.prototype;
    }

    return foo();

}
runTestCase(testcase);
