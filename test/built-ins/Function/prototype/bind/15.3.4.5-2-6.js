// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    15.3.4.5 step 2 specifies that a TypeError must be thrown if the Target
    is not callable.
es5id: 15.3.4.5-2-6
description: Function.prototype.bind allows Target to be a constructor (Object)
includes: [runTestCase.js]
---*/

function testcase() {
  var boc = Object.bind(null);
  var o = boc(42);
  if (o == 42) {
    return true;
  }
 }
runTestCase(testcase);
