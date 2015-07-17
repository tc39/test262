// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-0
description: >
    Global.undefined is a data property with default attribute values
    (false)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(fnGlobalObject(), 'undefined');
  if (desc.writable === false &&
      desc.enumerable === false &&
      desc.configurable === false) {
    return true;
  }
 }
runTestCase(testcase);
