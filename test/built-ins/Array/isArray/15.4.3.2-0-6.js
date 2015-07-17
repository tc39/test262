// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-0-6
description: Array.isArray return true if its argument is an Array (new Array())
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(10);
  var b = Array.isArray(a);
  if (b === true) {
    return true;
  }
 }
runTestCase(testcase);
