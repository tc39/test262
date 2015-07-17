// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-15
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Object.getOwnPropertyDescriptor)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(Object, "getOwnPropertyDescriptor");
  if (desc.value === Object.getOwnPropertyDescriptor &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
