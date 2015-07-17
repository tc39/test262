// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-10-c-ii-2-s
description: arguments[i] doesn't map to actual parameters in strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  
  function foo(a,b,c)
  {
    arguments[0] = 1; arguments[1] = 'str'; arguments[2] = 2.1;
    return 10 === a && 'sss' === b && 1 === c;
  }
  return foo(10,'sss',1);
 }
runTestCase(testcase);
