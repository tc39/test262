// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.10.7.1-2
description: >
    RegExp.prototype.source is an accessor property whose set accessor
    function is undefined
includes: [runTestCase.js]
---*/

function testcase() {
  var d = Object.getOwnPropertyDescriptor(RegExp.prototype, 'source');
  
  if (typeof d.get === 'function' &&
      d.set === undefined &&
      d.enumerable === false &&
      d.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
