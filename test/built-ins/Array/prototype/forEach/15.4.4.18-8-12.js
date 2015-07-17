// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.18-8-12
description: Array.prototype.forEach doesn't visit expandos
includes: [runTestCase.js]
---*/

function testcase() {

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    callCnt++;
  }
  var arr = [1,2,3,4,5];
  arr["i"] = 10;
  arr[true] = 11;

  arr.forEach(callbackfn);
  if(callCnt == 5)
  {
    return true;
  }

 }
runTestCase(testcase);
