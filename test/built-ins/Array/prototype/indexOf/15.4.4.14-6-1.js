// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-6-1
description: >
    Array.prototype.indexOf returns -1 if fromIndex is greater than
    Array length
includes: [runTestCase.js]
---*/

function testcase() {
  var a = [1,2,3];
  if (a.indexOf(1,5) === -1 &&  
     a.indexOf(1,3) === -1  &&
     [ ].indexOf(1,0) === -1  ){
    return true;
  }
 }
runTestCase(testcase);
