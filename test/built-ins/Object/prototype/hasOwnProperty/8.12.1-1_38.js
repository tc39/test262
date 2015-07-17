// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_38
description: >
    Properties - [[HasOwnProperty]] (non-configurable, non-enumerable
    inherited getter property)
includes: [runTestCase.js]
---*/

function testcase() {

    var base = {};
    Object.defineProperty(base, "foo", {get: function() {return 42;}});
    var o = Object.create(base);
    return o.hasOwnProperty("foo")===false;

}
runTestCase(testcase);
