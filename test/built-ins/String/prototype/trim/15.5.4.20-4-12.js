// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-12
description: >
    String.prototype.trim handles whitepace and lineterminators
    (abc\u000B)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("abc\u000B".trim() === "abc") {
    return true;
  }
 }
runTestCase(testcase);
