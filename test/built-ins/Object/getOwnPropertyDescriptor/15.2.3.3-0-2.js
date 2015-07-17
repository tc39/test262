// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-0-2
description: >
    Object.getOwnPropertyDescriptor must exist as a function taking 2
    parameters
includes: [runTestCase.js]
---*/

function testcase() {
  if (Object.getOwnPropertyDescriptor.length === 2) {
    return true;
  }
 }
runTestCase(testcase);
