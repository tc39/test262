// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 8.12.1-1_27
description: >
    Properties - [[HasOwnProperty]] (non-configurable, enumerable own
    getter property)
includes: [runTestCase.js]
---*/

function testcase() {

    var o = {};
    Object.defineProperty(o, "foo", {get: function() {return 42;}, enumerable:true});
    return o.hasOwnProperty("foo");

}
runTestCase(testcase);
