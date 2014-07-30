// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    This test should be run without any built-ins being added/augmented.
    The initial value of [[Configurable]] on JSON is true. This means we
    should be able to delete (8.6.2.5) the stringify and parse properties.
es5id: 15.12.3-0-3
description: JSON.stringify must be deletable (configurable)
includes: [runTestCase.js]
---*/

function testcase() {
  var o = JSON;
  var desc = Object.getOwnPropertyDescriptor(o, "stringify");
  if (desc.configurable === true) {
    return true;
  }
 }
runTestCase(testcase);
