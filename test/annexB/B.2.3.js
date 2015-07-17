// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: B.2.3
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (String.prototype.substr)
includes: [runTestCase.js]
---*/

function testcase() {
  var desc = Object.getOwnPropertyDescriptor(String.prototype, "substr");
  if (desc.value === String.prototype.substr &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
