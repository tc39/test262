// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.5-0-2
description: Object.create must exist as a function taking 2 parameters
includes: [runTestCase.js]
---*/

function testcase() {
  if (Object.create.length === 2) {
    return true;
  }
 }
runTestCase(testcase);
