// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 10.4.3-1-104
description: >
    Strict mode should not ToObject thisArg if not an object.  Strict
    equality operator should succeed.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase(){
  Object.defineProperty(Object.prototype, "x", { get: function () { "use strict"; return this; } }); 
  if(!((5).x === 5)) return false;
  return true;
}

runTestCase(testcase);
