// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.3.2.1-11-2-s
description: >
    Duplicate seperate parameter name in Function constructor called
    from strict mode allowed if body not strict
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase()
{ 
  "use strict"; 
  try {
    Function('a','a','return;');
    return true;
  } catch (e) {
    return false;
  }
 }
runTestCase(testcase);
