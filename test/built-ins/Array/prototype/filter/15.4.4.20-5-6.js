// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-5-6
description: Array.prototype.filter - thisArg is function
includes: [runTestCase.js]
---*/

function testcase() {
  var res = false;
  function callbackfn(val, idx, obj)
  {
    return this.res;
  }

  function foo(){}
  foo.res = true;
  
  var srcArr = [1];
  var resArr = srcArr.filter(callbackfn,foo);
  if( resArr.length === 1)
    return true;    

 }
runTestCase(testcase);
