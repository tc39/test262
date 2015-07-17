// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-3
description: >
    Object.isExtensible returns true for all built-in objects
    (Function)
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() {}
 
  var e = Object.isExtensible(foo);
  if (e === true) {
    return true;
  }
 }
runTestCase(testcase);
