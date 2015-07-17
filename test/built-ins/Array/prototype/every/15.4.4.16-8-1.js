// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-8-1
description: Array.prototype.every returns true if 'length' is 0 (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  function cb() {}
  var i = [].every(cb);
  if (i === true) {
    return true;
  }
 }
runTestCase(testcase);
