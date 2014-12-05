// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 11.4.1-2-2
description: >
    delete operator returns true when deleting returned value from a
    function
includes: [runTestCase.js]
---*/

function testcase() {
  var bIsFooCalled = false;
  var foo = function(){bIsFooCalled = true;};

  var d = delete foo();
  if(d === true && bIsFooCalled === true)
    return true;
 }
runTestCase(testcase);
