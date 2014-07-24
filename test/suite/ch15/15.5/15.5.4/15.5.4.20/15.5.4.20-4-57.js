// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.5.4.20-4-57
description: >
    String.prototype.trim handles whitepace and lineterminators
    (\u2028\u2028)
includes: [runTestCase.js]
---*/

function testcase() {
  if ("\u2028\u2028".trim() === "") {
    return true;
  }
 }
runTestCase(testcase);
