// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-2
description: Array.prototype.map - thisArg is Object
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  var o = new Object();
  o.res = true;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  var srcArr = [1];
  var resArr = srcArr.map(callbackfn,o);
  if( resArr[0] === true)
    return true;    

 }
runTestCase(testcase);
