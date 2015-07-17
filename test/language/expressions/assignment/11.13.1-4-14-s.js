// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.13.1-4-14-s
description: >
    simple assignment throws TypeError if LeftHandSide is a readonly
    property in strict mode (Number.MAX_VALUE)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    Number.MAX_VALUE = 42;
    return false;
  }
  catch (e) {
    return (e instanceof TypeError);
  }
 }
runTestCase(testcase);
