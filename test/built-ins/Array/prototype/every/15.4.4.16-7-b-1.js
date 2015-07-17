// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-b-1
description: >
    Array.prototype.every - callbackfn not called for indexes never
    been assigned values
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0.;
  function callbackfn(val, Idx, obj)
  {
    callCnt++;
    return true;
  }

  var arr = new Array(10);
  arr[1] = undefined;  
  arr.every(callbackfn);
  if( callCnt === 1)    
      return true;  
 }
runTestCase(testcase);
