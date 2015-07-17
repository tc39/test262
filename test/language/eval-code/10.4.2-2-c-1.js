// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.2-2-c-1
description: >
    Direct val code in non-strict mode - can instantiate variable in
    calling context
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var x = 0;
  return function inner() {
     eval("var x = 1");
     if (x === 1)
        return true;
     } ();
   }
runTestCase(testcase);
