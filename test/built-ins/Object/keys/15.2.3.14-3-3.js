// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-3-3
description: >
    Object.keys returns the standard built-in Array containing own
    enumerable properties (array)
includes: [runTestCase.js]
---*/

function testcase() {
  var o = [1, 2];
  var a = Object.keys(o);
  if (a.length === 2 &&
      a[0] === '0' &&
      a[1] === '1') {
    return true;
  }
 }
runTestCase(testcase);
