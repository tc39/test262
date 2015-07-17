// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-9
description: JSON.stringify correctly works on top level Boolean objects.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify(new Boolean(false)) === 'false';
  }
runTestCase(testcase);
