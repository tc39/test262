// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.6-0-2
description: Object.defineProperty must exist as a function taking 3 parameters
includes: [runTestCase.js]
---*/

function testcase() {
  if (Object.defineProperty.length === 3) {
    return true;
  }
 }
runTestCase(testcase);
