// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-9-4
description: >
    Array.prototype.filter doesn't visit deleted elements when
    Array.length is decreased
includes: [runTestCase.js]
---*/

function testcase() { 
 
  function callbackfn(val, idx, obj)
  {
    srcArr.length = 2;
    return true;
  }

  var srcArr = [1,2,3,4,6];
  var resArr = srcArr.filter(callbackfn);
  if(resArr.length === 2 )
      return true;  
  
 }
runTestCase(testcase);
