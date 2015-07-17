// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-8-7
description: >
    Array.prototype.lastIndexOf must return correct index (self
    reference)
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(0,1,2,3);  
  a[2] = a;
  if (a.lastIndexOf(a) === 2 &&  
      a.lastIndexOf(3) === 3 ) 
  {
    return true;
  }
 }
runTestCase(testcase);
