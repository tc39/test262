// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-9
description: Object.isExtensible returns true for all built-in objects (Date)
includes: [runTestCase.js]
---*/

function testcase() {
  var e = Object.isExtensible(Date);
  if (e === true) {
    return true;
  }
 }
runTestCase(testcase);
