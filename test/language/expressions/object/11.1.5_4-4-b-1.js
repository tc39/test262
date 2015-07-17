// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 11.1.5_4-4-b-1
description: >
    Object literal - No SyntaxError if a data property definition is
    followed by get accessor definition with the same name
includes: [runTestCase.js]
---*/

function testcase() {
  eval("({foo : 1, get foo(){}});");
  return true;
}
runTestCase(testcase);
