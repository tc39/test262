// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-0-2
description: String.prototype.trim must exist as a function taking 0 parameters
includes: [runTestCase.js]
---*/

function testcase() {
  if (String.prototype.trim.length === 0) {
    return true;
  }
 }
runTestCase(testcase);
