// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-6-1
description: >
    Array.prototype.filter returns an empty array if 'length' is 0
    (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  function cb(){}
  var a = [].filter(cb);
  if (Array.isArray(a) &&
      a.length === 0) {
    return true;
  }
 }
runTestCase(testcase);
