// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Object.seal(Object.prototype) does not affect __proto__
includes: [runTestCase.js]
---*/

function testcase() {
  Object.seal(Object.prototype);
  var a = new Object();
  a.__proto__ = { y: 2 };
  return a.y === 2;
}
runTestCase(testcase);
