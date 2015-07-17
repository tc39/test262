// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-4
description: Object.isExtensible returns true for all built-in objects (Array)
includes: [runTestCase.js]
---*/

function testcase() {
  var e = Object.isExtensible(Array);
  if (e === true) {
    return true;
  }
 }
runTestCase(testcase);
