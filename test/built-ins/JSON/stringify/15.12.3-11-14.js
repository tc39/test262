// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-14
description: Applying JSON.stringify to a  function returns undefined.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify(function() {}) === undefined;
  }
runTestCase(testcase);
