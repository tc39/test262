// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.3-4-10
description: >
    Object.getOwnPropertyDescriptor returns data desc for functions on
    built-ins (Global.decodeURIComponent)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
  var global = fnGlobalObject();
  var desc = Object.getOwnPropertyDescriptor(global,  "decodeURIComponent");
  if (desc.value === global.decodeURIComponent &&
      desc.writable === true &&
      desc.enumerable === false &&
      desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
