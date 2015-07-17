// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.13-0-1
description: Object.isExtensible must exist as a function
includes: [runTestCase.js]
---*/

function testcase() {
  var f = Object.isExtensible ;
  if (typeof(f) === "function") {
    return true;
  }
 }
runTestCase(testcase);
