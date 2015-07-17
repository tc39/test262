// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.5.4.20-4-56
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u000D\u000D)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u000D\u000D".trim() === "") {
    return true;
  }
 }
runTestCase(testcase);
