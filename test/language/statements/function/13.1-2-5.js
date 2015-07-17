// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-2-5
description: >
    arguments allowed as formal parameter name of a non-strict
    function declaration
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase()
{
  try 
  {
    eval("function foo(arguments){};");
    return true;
  }
  catch (e) {  }
 }
runTestCase(testcase);
