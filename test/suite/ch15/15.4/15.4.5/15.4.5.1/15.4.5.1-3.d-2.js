// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.5.1-3.d-2
description: >
    Throw RangeError if attempt to set array length property to
    4294967297 (1+2**32)
includes: [runTestCase.js]
---*/

function testcase() {
  try {
      [].length = 4294967297 ;
  } catch (e) {
	if (e instanceof RangeError) return true;
  }
 }
runTestCase(testcase);
