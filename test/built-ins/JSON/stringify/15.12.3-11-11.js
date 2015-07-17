// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-11
description: >
    A JSON.stringify replacer function applied to a top level Object
    can return undefined.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify({prop:1}, function(k, v) { return undefined }) === undefined;
  }
runTestCase(testcase);
