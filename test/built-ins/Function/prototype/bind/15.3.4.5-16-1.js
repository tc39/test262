// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-16-1
description: Function.prototype.bind, [[Extensible]] of the bound fn is true
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  var ex = Object.isExtensible(bf);
  if (ex === true) {
    return true;
  }
 }
runTestCase(testcase);
