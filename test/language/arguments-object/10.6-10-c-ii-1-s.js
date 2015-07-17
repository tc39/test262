// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-10-c-ii-1-s
description: >
    arguments[i] remains same after changing actual parameters in
    strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  function foo(a,b,c)
  {
    a = 1; b = 'str'; c = 2.1;
    return (arguments[0] === 10 && arguments[1] === 'sss' && arguments[2] === 1);
  }
  return foo(10, 'sss', 1);
 }
runTestCase(testcase);
