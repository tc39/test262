// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-9
description: >
    delete operator returns false when deleting a non-configurable
    data property (Math.LN2)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  var d = delete Math.LN2;
  if (d === false) {
    return true;
  }
 }
runTestCase(testcase);
