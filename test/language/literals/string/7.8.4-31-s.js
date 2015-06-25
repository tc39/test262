// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 7.8.4-31-s
description: An OctalEscapeSequence is not allowed in a String under Strict Mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase()
{
  try 
  {
    eval('var x = "\\" + "1";');
    return false;
  }
  catch (e) {
    return (e instanceof SyntaxError);
  }
 }
runTestCase(testcase);
