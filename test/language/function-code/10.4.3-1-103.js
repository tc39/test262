// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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
