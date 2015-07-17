// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-2
description: Array.prototype.some - thisArg is Object
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

  var arr = [1];
  if(arr.some(callbackfn, o) === true)
    return true;    

 }
runTestCase(testcase);
