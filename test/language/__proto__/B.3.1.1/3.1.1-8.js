// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Object.preventExtensions(Object.prototype) should not affect
    pseudo property __proto__
includes: [runTestCase.js]
---*/

function testcase() {
  Object.preventExtensions(Object.prototype);
  var a = new Object();
  a.__proto__ = { y: 2 };
  return a.y === 2;
}
runTestCase(testcase);
