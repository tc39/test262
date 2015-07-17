// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-15-2
description: >
    Function.prototype.bind, 'length' is a data valued own property
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  var desc = Object.getOwnPropertyDescriptor(bf, 'length');
  if (desc.value === 0 &&
      desc.enumerable === false &&
      desc.writable === false &&
      desc.configurable == true) {
    return true;
  }
 }
runTestCase(testcase);
