// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5-4-4-a-1-s
description: >
    Object literal - No SyntaxError for duplicate data property names
includes: [runTestCase.js]
---*/

function testcase() {
  eval("({foo:0,foo:1});");
  return true;
}
runTestCase(testcase);
