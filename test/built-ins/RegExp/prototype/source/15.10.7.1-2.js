// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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
