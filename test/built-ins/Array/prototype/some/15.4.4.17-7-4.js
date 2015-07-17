// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-4
description: >
    Array.prototype.some doesn't visit deleted elements when
    Array.length is decreased
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    arr.length = 3;
    if(val < 4)
      return false;
    else 
      return true;
  }
  
  var arr = [1,2,3,4,6];
  
  if(arr.some(callbackfn) === false)    
    return true;    
 }
runTestCase(testcase);
