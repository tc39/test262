// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: SetPrototypeof
includes: [runTestCase.js]
---*/

function testcase() {

   delete Object.prototype.__proto__;

   var obj = {};
   Object.setPrototypeOf(obj, {x:2})
   return obj.x === 2;


}
runTestCase(testcase);
