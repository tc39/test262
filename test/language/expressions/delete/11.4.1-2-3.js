// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.4.1-2-3
description: >
    delete operator returns true when deleting a non-reference
    (boolean)
includes: [runTestCase.js]
---*/

function testcase() {
  var d = delete true;
  if (d === true) {
    return true;
  }
 }
runTestCase(testcase);
