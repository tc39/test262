// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.keys throws TypeError if type of first param is not Object
    (string)
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    Object.keys('abc');
  }
  catch (e) {
    if (e instanceof TypeError) {
      return true;
    }
  }
 }
runTestCase(testcase);
