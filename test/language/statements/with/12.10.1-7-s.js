// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-7-s
description: >
    with statement in strict mode throws SyntaxError (function
    expression, where the container function is directly evaled from
    strict code)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    eval("var f = function () {\
                var o = {}; \
                with (o) {}; \
             }\
        ");
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
