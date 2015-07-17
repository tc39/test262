// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.10.7.5-2
description: RegExp.prototype.lastIndex is not present
includes: [runTestCase.js]
---*/

function testcase() {
  var d = Object.getOwnPropertyDescriptor(RegExp.prototype, 'lastIndex');
  return d === undefined;
 }
runTestCase(testcase);
