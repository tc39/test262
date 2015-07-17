// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-104
description: >
    Strict mode should not ToObject thisArg if not an object.  Strict
    equality operator should succeed.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase(){
  Object.defineProperty(Object.prototype, "x", { get: function () { return this; } }); 
  if(!((5).x === 5)) return false;
  return true;
}

runTestCase(testcase);
