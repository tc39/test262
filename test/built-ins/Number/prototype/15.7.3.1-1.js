// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.7.3.1-1
description: >
    Number.prototype is a data property with default attribute values
    (false)
includes: [runTestCase.js]
---*/

function testcase() {
  var d = Object.getOwnPropertyDescriptor(Number, 'prototype');
  
  if (d.writable === false &&
      d.enumerable === false &&
      d.configurable === false) {
    return true;
  }
 }
runTestCase(testcase);
