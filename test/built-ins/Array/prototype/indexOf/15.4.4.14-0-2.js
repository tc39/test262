// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-0-2
description: Array.prototype.indexOf has a length property whose value is 1.
includes: [runTestCase.js]
---*/

function testcase() {
  if (Array.prototype.indexOf.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
