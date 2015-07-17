// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 7.8.4-3-s
description: An OctalEscapeSequence is not allowed in a String under Strict Mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase()
{
  try 
  {
    eval('var x = "a\\4";');
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
