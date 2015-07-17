// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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
