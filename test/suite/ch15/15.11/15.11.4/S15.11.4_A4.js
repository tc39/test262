// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Since Error prototype object is not function it has not [[create]] method
es5id: 15.11.4_A4
description: Checking if creating "new Error.prototype" fails
includes:
    - $FAIL.js
    - Test262Error.js
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	__instance = new Object.prototype;
	$FAIL('#1: "__instance = new Object.prototype" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}
//
//////////////////////////////////////////////////////////////////////////////
