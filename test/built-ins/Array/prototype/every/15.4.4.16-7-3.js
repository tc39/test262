// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-3
description: >
    Array.prototype.every doesn't visit deleted elements in array
    after the call
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, Idx, obj)
  {
    delete arr[2];
    if(val == 3)
       return false;
    else 
       return true;
  }

  var arr = [1,2,3,4,5];
  
  if(arr.every(callbackfn) === true)    
      return true;  
  
 }
runTestCase(testcase);
