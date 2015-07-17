// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-0-2
description: Array.isArray must exist as a function taking 1 parameter
includes: [runTestCase.js]
---*/

function testcase() {
  if (Array.isArray.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
