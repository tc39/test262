// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-5-5
description: Array.prototype.some - thisArg is object from object template
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  function foo(){}
  var f = new foo();
  f.res = true;
  var arr = [1];

  if(arr.some(callbackfn,f) === true)
    return true;    

 }
runTestCase(testcase);
