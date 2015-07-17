// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-0-2
description: Object.isExtensible must exist as a function taking 1 parameter
includes: [runTestCase.js]
---*/

function testcase() {
  if (Object.isExtensible.length === 1) {
    return true;
  }
 }
runTestCase(testcase);
