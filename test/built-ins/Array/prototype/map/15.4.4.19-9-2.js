// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-9-2
description: >
    Array.prototype.map returns new Array with same number of elements
    and values the result of callbackfn
includes: [runTestCase.js]
---*/

function testcase() {

  function callbackfn(val, idx, obj)
  {
    return val + 10;
  }
  var srcArr = [1,2,3,4,5];
  var resArr = srcArr.map(callbackfn);
  if(resArr[0] === 11 &&
     resArr[1] === 12 &&
     resArr[2] === 13 &&
     resArr[3] === 14 &&
     resArr[4] === 15)
  {
    return true;
  }

 }
runTestCase(testcase);
