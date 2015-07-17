// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-5
description: >
    Array.prototype.forEach visits deleted element in array after the
    call when same index is also present in prototype
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    delete arr[4];
    callCnt++;
  }

  Array.prototype[4] = 5;

  var arr = [1,2,3,4,5];
  arr.forEach(callbackfn)
  delete Array.prototype[4];
  if( callCnt === 5)    
      return true;  
  
 }
runTestCase(testcase);
