// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-9-1
description: Function.prototype.bind, [[Prototype]] is Function.prototype
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  if (Function.prototype.isPrototypeOf(bf)) {
    return true;
  }
 }
runTestCase(testcase);
