// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-38
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u0020c)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("ab\u0020c".trim() === "ab\u0020c") {
    return true;
  }
 }
runTestCase(testcase);
