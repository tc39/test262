// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_1
description: Properties - [[HasOwnProperty]] (property does not exist)
includes: [runTestCase.js]
---*/

function testcase() {

    var o = {};
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
