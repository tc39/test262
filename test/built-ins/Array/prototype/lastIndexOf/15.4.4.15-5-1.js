// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-5-1
description: Array.prototype.lastIndexOf when fromIndex is string
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(0,1,1);
  if (a.lastIndexOf(1,"1") === 1 &&          // "1" resolves to 1
      a.lastIndexOf(1,"one") === -1) {       // NaN string resolves to 0
    return true;
  }
 }
runTestCase(testcase);
