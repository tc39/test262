// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-187
description: >
    Object.getOwnPropertyDescriptor returns data desc for properties
    on built-ins (Function (instance).length)
includes: [runTestCase.js]
---*/

function testcase() {
  var f = Function('return 42;');

  var desc = Object.getOwnPropertyDescriptor(f, "length");

  if (desc.writable === false &&
      desc.enumerable === false &&
      desc.configurable === true &&
      desc.hasOwnProperty('get') === false &&
      desc.hasOwnProperty('set') === false) {
    return true;
  }
 }
runTestCase(testcase);
