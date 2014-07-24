// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
