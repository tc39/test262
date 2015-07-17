// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 14.1-12-s
description: comments may follow 'use strict' directive
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {

  function foo()
  {
     "use strict";    /* comment */   // comment

     return (this === undefined);
  }

  return foo.call(undefined);
 }
runTestCase(testcase);
