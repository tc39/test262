// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-5-3
description: Array.prototype.indexOf when fromIndex is boolean
includes: [runTestCase.js]
---*/

function testcase() {
  var a = [1,2,3];
  if (a.indexOf(1,true) === -1 &&        // true resolves to 1
     a.indexOf(1,false) === 0 ) {       // false resolves to 0
    return true;
  }
 }
runTestCase(testcase);
