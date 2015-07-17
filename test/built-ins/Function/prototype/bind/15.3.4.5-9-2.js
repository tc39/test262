// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-9-2
description: >
    Function.prototype.bind, [[Prototype]] is Function.prototype
    (using getPrototypeOf)
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  if (Object.getPrototypeOf(bf) === Function.prototype) {
    return true;
  }
 }
runTestCase(testcase);
