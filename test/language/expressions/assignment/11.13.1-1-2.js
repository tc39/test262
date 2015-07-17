// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: PutValue operates only on references (see step 1).
es5id: 11.13.1-1-2
description: >
    simple assignment throws ReferenceError if LeftHandSide is not a
    reference (string)
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    eval("'x' = 42");
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      return true;
    }
  }
 }
runTestCase(testcase);
