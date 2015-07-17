// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-2
description: >
    Array.prototype.forEach doesn't visit deleted elements in array
    after the call
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    if(callCnt == 0)
      delete arr[3];
    callCnt++;
  }

  var arr = [1,2,3,4,5];
  arr.forEach(callbackfn)
  if( callCnt === 4)    
      return true;  
  
 }
runTestCase(testcase);
