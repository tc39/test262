// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.2.1-9-s
description: >
    an indirect eval declaring a var named 'eval' does not throw
includes: [runTestCase.js]
---*/

function testcase() {
  var s = eval;
  s('var eval;');
  return true;
 }
runTestCase(testcase);
