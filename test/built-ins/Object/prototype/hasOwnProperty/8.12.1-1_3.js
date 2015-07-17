// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_3
description: Properties - [[HasOwnProperty]] (old style inherited property)
includes: [runTestCase.js]
---*/

function testcase() {

    var base = {foo:42};
    var o = Object.create(base);
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
