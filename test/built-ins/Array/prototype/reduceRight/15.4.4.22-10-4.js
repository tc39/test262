// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-10-4
description: >
    Array.prototype.reduceRight - subclassed array with length more
    than 1
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(0, 1, 2, 3);
  function foo() {}
  var f = new foo();
  
  function cb(prevVal, curVal, idx, obj){return prevVal + curVal;}
  if(f.reduceRight(cb) === 6)
    return true;
 }
runTestCase(testcase);
