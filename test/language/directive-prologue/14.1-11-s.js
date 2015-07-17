// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 14.1-11-s
description: comments may preceed 'use strict' directive
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {

  function foo()
  {
     // comment
     /* comment */ "use strict";

   return(this === undefined);

  }

  return foo.call(undefined);
 }
runTestCase(testcase);
