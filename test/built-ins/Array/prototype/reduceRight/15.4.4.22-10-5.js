// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-10-5
description: >
    Array.prototype.reduceRight reduces array in descending order of
    indices(initialvalue present)
includes: [runTestCase.js]
---*/

function testcase() {

  function callbackfn(prevVal, curVal,  idx, obj)
  {
    return prevVal + curVal;
  }
  var srcArr = ['1','2','3','4','5'];
  if(srcArr.reduceRight(callbackfn,'6') === '654321')
  {
    return true;
  }

 }
runTestCase(testcase);
