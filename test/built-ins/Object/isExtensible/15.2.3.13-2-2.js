// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-2-2
description: Object.isExtensible returns true for all built-in objects (Object)
includes: [runTestCase.js]
---*/

function testcase() {
  var o = {};
  var e = Object.isExtensible(o);
  if (e === true) {
    return true;
  }
 }
runTestCase(testcase);
