// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.16-8-1
description: Array.prototype.every returns true if 'length' is 0 (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  function cb() {}
  var i = [].every(cb);
  if (i === true) {
    return true;
  }
 }
runTestCase(testcase);
