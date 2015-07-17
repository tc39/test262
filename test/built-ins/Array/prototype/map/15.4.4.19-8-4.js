// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-4
description: >
    Array.prototype.map doesn't visit deleted elements when
    Array.length is decreased
includes: [runTestCase.js]
---*/

function testcase() { 
 
  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    srcArr.length = 2;
    callCnt++;
    return 1;
  }

  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.map(callbackfn);
  if(resArr.length === 5  && callCnt === 2 && resArr[2] === undefined)
    return true;  
  
 }
runTestCase(testcase);
