// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 13.1-3-7
description: >
    arguments allowed as function identifier in non-strict function
    declaration
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase()
{
  try 
  {
    eval("function arguments (){};");
    return true;
  }
  catch (e) {  }  
 }
runTestCase(testcase);
