// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-1
description: >
    Array.prototype.forEach doesn't consider new elements added to
    array after the call
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++; 
    arr[2] = 3;
    arr[5] = 6;
  }

  var arr = [1,2,,4,5];
  arr.forEach(callbackfn);
  if( callCnt === 5)    
    return true;
 }
runTestCase(testcase);
