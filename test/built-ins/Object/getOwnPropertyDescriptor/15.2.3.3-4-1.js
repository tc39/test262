// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-1
description: >
    Object.getOwnPropertyDescriptor returns an object representing a
    data desc for valid data valued properties
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    o["foo"] = 101;

    var desc = Object.getOwnPropertyDescriptor(o, "foo");
    if (desc.value === 101 &&
        desc.enumerable === true &&
        desc.writable === true &&
        desc.configurable === true &&
        !desc.hasOwnProperty("get") &&
        !desc.hasOwnProperty("set")) {
      return true;
    }
 }
runTestCase(testcase);
