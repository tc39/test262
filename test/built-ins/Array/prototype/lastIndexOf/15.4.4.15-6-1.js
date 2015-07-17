// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-6-1
description: >
    Array.prototype.lastIndexOf when fromIndex greater than
    Array.length
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,3);
  if (a.lastIndexOf(3,5.4) === 2 &&  
     a.lastIndexOf(3,3.1) === 2 ) {
    return true;
  }
 }
runTestCase(testcase);
