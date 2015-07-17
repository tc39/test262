// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-0-1
description: String.prototype.trim must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {
  var f = String.prototype.trim;
  if (typeof(f) === "function") {
    return true;
  }
 }
runTestCase(testcase);
