// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-c-3
description: >
    Array.prototype.reduceRight throws TypeError when elements
    assigned values are deleted and initialValue is not present
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(prevVal, curVal, idx, obj)
  {
  }

  var arr = [1,2,3,4,5];
  delete arr[0];
  delete arr[1];
  delete arr[2];
  delete arr[3];
  delete arr[4];
  try {
    arr.reduceRight(callbackfn);
  } 
  catch(e) {
    if(e instanceof TypeError)
      return true;  
  }
 }
runTestCase(testcase);
