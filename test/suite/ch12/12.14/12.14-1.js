/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch12/12.14/12.14-1.js
 * @description var initializer in catch with same name as catch parameter is a SyntaxError
 * @negative ^((?!NotEarlyError).)*$
 */

throw NotEarlyError;

function testcase() {
  foo = "prior to throw";
  try {
    throw new Error();
  }
  catch (foo) {
    var foo = "initializer in catch";
  }
 return foo === "prior to throw";
  
 }
runTestCase(testcase);
