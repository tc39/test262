// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.6-6-1
description: "'length property of arguments object exists"
includes: [runTestCase.js]
---*/

function testcase() {
  
  var desc = Object.getOwnPropertyDescriptor(arguments,"length");
  return desc !== undefined
 }
runTestCase(testcase);
