// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.4.1-2-4
description: delete operator returns true when deleting a non-reference (string)
includes: [runTestCase.js]
---*/

function testcase() {
  var d = delete "abc";
  if (d === true) {
    return true;
  }
 }
runTestCase(testcase);
