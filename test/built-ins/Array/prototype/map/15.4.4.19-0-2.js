// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-0-2
description: Array.prototype.map.length must be 1
includes: [runTestCase.js]
---*/

function testcase() {
  if (Array.prototype.map.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
