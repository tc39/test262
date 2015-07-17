// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10.1-12-s
description: with statement in strict mode throws SyntaxError (strict eval)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  try {
    eval("\
          'use strict'; \
          var o = {}; \
          with (o) {}\
        ");
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError) ;
  }
 }
runTestCase(testcase);
