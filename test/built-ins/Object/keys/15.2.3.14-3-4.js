// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.14-3-4
description: >
    Object.keys of an arguments object returns the indices of the
    given arguments
includes: [runTestCase.js]
---*/

function testcase() {
  function testArgs2(x, y, z) {
    // Properties of the arguments object are enumerable.
    var a = Object.keys(arguments);
    if (a.length === 2 && a[0] in arguments && a[1] in arguments)
      return true;
  }
  function testArgs3(x, y, z) {
    // Properties of the arguments object are enumerable.
    var a = Object.keys(arguments);
    if (a.length === 3 && a[0] in arguments && a[1] in arguments && a[2] in arguments)
      return true;
  }
  function testArgs4(x, y, z) {
    // Properties of the arguments object are enumerable.
    var a = Object.keys(arguments);
    if (a.length === 4 && a[0] in arguments && a[1] in arguments && a[2] in arguments && a[3] in arguments)
      return true;
  }
  return testArgs2(1, 2) && testArgs3(1, 2, 3) && testArgs4(1, 2, 3, 4);
 }
runTestCase(testcase);
