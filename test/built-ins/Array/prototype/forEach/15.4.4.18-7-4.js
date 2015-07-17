// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-7-4
description: >
    Array.prototype.forEach doesn't consider newly added elements in
    sparse array
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    arr[1000] = 3;
    callCnt++;
  }

  var arr = new Array(10);
  arr[1] = 1;
  arr[2] = 2;
  arr.forEach(callbackfn);
  if( callCnt === 2)    
      return true;  
  
 }
runTestCase(testcase);
