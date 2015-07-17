// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-27
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u0009\u0009)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u0009\u0009".trim() === "") {
    return true;
  }
 }
runTestCase(testcase);
