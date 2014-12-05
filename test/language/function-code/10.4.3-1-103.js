// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-103
description: >
    Non strict mode should ToObject thisArg if not an object.
    Abstract equality operator should succeed.
includes: [runTestCase.js]
---*/

function testcase(){
  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
  if((5).x == 0) return false;
  if(!((5).x == 5)) return false;
  return true;
}

runTestCase(testcase);
