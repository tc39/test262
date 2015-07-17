// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-2
description: >
    Array.prototype.map considers new value of elements in array after
    it is called
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {    
    srcArr[4] = -1;
    if(val > 0)
      return 1;
    else
      return 0;
  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.map(callbackfn);
  if(resArr.length === 5 && resArr[4] === 0)
    return true;  
  
 }
runTestCase(testcase);
