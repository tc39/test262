// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-8-12
description: >
    Array.prototype.every doesn't mutate the array on which it is
    called on
includes: [runTestCase.js]
---*/

function testcase() {

  function callbackfn(val, idx, obj)
  {
    return true;
  }
  var arr = [1,2,3,4,5];
  arr.every(callbackfn);
  if(arr[0] === 1 &&
     arr[1] === 2 &&
     arr[2] === 3 &&
     arr[3] === 4 &&
     arr[4] === 5)
  {
    return true;
  }

 }
runTestCase(testcase);
