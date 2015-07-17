// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.10.6
description: RegExp.prototype is itself a not RegExp
includes: [runTestCase.js]
---*/

function testcase() {
  var s = Object.prototype.toString.call(RegExp.prototype);
  return s === '[object Object]';
 }
runTestCase(testcase);
