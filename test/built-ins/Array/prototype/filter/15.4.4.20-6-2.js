// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.20-6-2
description: >
    Array.prototype.filter returns an empty array if 'length' is 0
    (subclassed Array, length overridden to null (type conversion))
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = null;
  
  function cb(){}
  var a = f.filter(cb);
  
  if (Array.isArray(a) &&
      a.length === 0) {
    return true;
  }
 }
runTestCase(testcase);
