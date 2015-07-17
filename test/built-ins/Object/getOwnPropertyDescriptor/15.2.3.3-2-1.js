// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-2-1
description: >
    Object.getOwnPropertyDescriptor returns undefined for undefined
    property name
includes: [runTestCase.js]
---*/

function testcase() {
    var o = {};
    var desc = Object.getOwnPropertyDescriptor(o, undefined);
    if (desc === undefined) {
      return true;
    }
 }
runTestCase(testcase);
