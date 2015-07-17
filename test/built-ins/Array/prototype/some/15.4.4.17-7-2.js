// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-2
description: >
    Array.prototype.some considers new value of elements in array
    after it is called
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    arr[4] = 6;
    if(val < 6)
      return false;
    else 
      return true;
  }

  var arr = [1,2,3,4,5];
  
  if(arr.some(callbackfn) === true)    
    return true;  
  
 }
runTestCase(testcase);
