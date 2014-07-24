// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Created based on feedback in
    https://bugs.ecmascript.org/show_bug.cgi?id=333
es5id: 10.4.3-1-106
description: >
    Strict mode should not ToObject thisArg if not an object.  Return
    type should be 'number'.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase(){
  Object.defineProperty(Object.prototype, "x", { get: function () { "use strict"; return this; } }); 
  if(!(typeof (5).x === "number")) return false;
  return true;
}

runTestCase(testcase);
