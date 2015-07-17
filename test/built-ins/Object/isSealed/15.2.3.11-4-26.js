// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.11-4-26
description: Object.isSealed returns false for all built-in objects (URIError)
includes: [runTestCase.js]
---*/

function testcase() {
  var b = Object.isSealed(URIError);
  if (b === false) {
    return true;
  }
  }
runTestCase(testcase);
