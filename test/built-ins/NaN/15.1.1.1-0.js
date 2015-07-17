// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.1-0
description: Global.NaN is a data property with default attribute values (false)
includes:
    - runTestCase.js
    - fnGlobalObject.js
---*/

function testcase() {
    var desc = Object.getOwnPropertyDescriptor(fnGlobalObject(), 'NaN');
  if (desc.writable === false &&
      desc.enumerable === false &&
      desc.configurable === false) {
    return true;
  }
 }
runTestCase(testcase);
