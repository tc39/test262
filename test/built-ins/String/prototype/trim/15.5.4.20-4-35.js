// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-35
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u0009c)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("ab\u0009c".trim() === "ab\u0009c") {
    return true;
  }
 }
runTestCase(testcase);
