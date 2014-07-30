// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.10.1-8-s
description: >
    with statement in strict mode throws SyntaxError (function
    expression, where the container Function is strict)
flags: [onlyStrict]
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
