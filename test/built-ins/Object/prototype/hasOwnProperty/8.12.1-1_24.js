// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_24
description: Properties - [[HasOwnProperty]] (literal inherited setter property)
includes: [runTestCase.js]
---*/

function testcase() {

    var base = { set foo(x) {;} };
    var o = Object.create(base);
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
