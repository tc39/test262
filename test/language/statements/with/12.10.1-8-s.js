// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-8-s
description: >
    with statement in strict mode throws SyntaxError (function
    expression, where the container Function is strict)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    Function("\
              \'use strict\'; \
              var f1 = function () {\
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
