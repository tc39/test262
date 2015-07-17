// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-5
description: >
    Array.prototype.some doesn't consider newly added elements in
    sparse array
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    arr[1000] = 5;
    if(val < 5)
      return false;
    else 
      return true;
  }

  var arr = new Array(10);
  arr[1] = 1;
  arr[2] = 2;
  
  if(arr.some(callbackfn) === false)    
    return true;  
 
 }
runTestCase(testcase);
