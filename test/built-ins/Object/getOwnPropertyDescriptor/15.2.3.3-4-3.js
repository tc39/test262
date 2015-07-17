// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-3
description: >
    Object.getOwnPropertyDescriptor returns an object representing an
    accessor desc for valid accessor properties
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};

    // dummy getter
    var getter = function () { return 1; }
    var d = { get: getter };

    Object.defineProperty(o, "foo", d);

    var desc = Object.getOwnPropertyDescriptor(o, "foo");
    if (desc.get === getter &&
        desc.set === undefined &&
        desc.enumerable === false &&
        desc.configurable === false) {
      return true;
    }
 }
runTestCase(testcase);
