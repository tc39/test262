// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-6
description: >
    Array.prototype.every visits deleted element in array after the
    call when same index is also present in prototype
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

  Array.prototype[2] = 3;
  var arr = [1,2,3,4,5];
  
  var res = arr.every(callbackfn);
  delete Array.prototype[2];

  if(res === false)    
      return true;  
  
 }
runTestCase(testcase);
