// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-0-1
description: Array.prototype.every must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {
  var f = Array.prototype.every;
  if (typeof(f) === "function") {
    return true;
  }
 }
runTestCase(testcase);
