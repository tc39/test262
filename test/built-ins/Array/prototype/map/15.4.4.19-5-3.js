// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-3
description: Array.prototype.map - thisArg is Array
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  var a = new Array();
  a.res = true;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  var srcArr = [1];
  var resArr = srcArr.map(callbackfn,a);
  if( resArr[0] === true)
    return true;    

 }
runTestCase(testcase);
