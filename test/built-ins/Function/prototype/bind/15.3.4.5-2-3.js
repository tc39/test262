// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    15.3.4.5 step 2 specifies that a TypeError must be thrown if the Target
    is not callable.
es5id: 15.3.4.5-2-3
description: Function.prototype.bind allows Target to be a constructor (Number)
includes: [runTestCase.js]
---*/

function testcase() {
  var bnc = Number.bind(null);
  var n = bnc(42);
  if (n === 42) {
    return true;
  }
 }
runTestCase(testcase);
