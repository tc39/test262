// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-10-3
description: Array.prototype.filter - subclassed array when length is reduced
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 1;
  
  function cb(){return true;}
  var a = f.filter(cb);
  
  if (Array.isArray(a) &&
      a.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
