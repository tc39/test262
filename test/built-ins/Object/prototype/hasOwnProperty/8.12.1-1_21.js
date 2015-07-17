// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_21
description: Properties - [[HasOwnProperty]] (literal own setter property)
includes: [runTestCase.js]
---*/

function testcase() {

    var o = { set foo(x) {;} };
    return o.hasOwnProperty("foo");

}
runTestCase(testcase);
