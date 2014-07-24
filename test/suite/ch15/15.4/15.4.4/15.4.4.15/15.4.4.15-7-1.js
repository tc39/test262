// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.15-7-1
description: Array.prototype.lastIndexOf with negative fromIndex
includes: [runTestCase.js]
---*/

function testcase() {
  var a = new Array(1,2,3);
  
  if (a.lastIndexOf(2,-2) === 1 &&  
      a.lastIndexOf(2,-3) === -1 &&  
      a.lastIndexOf(1,-5.3) === -1 ) {
    return true;
  }
 }
runTestCase(testcase);
