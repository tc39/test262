// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-41
description: >
    String.prototype.trim handles whitepace and lineterminators
    (ab\u200Bc)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("ab\u200Bc".trim() === "ab\u200Bc") {
    return true;
  }
 }
runTestCase(testcase);
