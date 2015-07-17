// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-7-1
description: Array.prototype.lastIndexOf with negative fromIndex
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,3);
  
  if (a.lastIndexOf(2,-2) === 1 &&  
      a.lastIndexOf(2,-3) === -1 &&  
      a.lastIndexOf(1,-5.3) === -1 ) {
    return true;
  }
 }
runTestCase(testcase);
