// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.5-1
description: Array instances have [[Class]] set to 'Array'
includes: [runTestCase.js]
---*/

function testcase() {
  var a = [];
  var s = Object.prototype.toString.call(a);
  if (s === '[object Array]') {
    return true;
  }
 }
runTestCase(testcase);
