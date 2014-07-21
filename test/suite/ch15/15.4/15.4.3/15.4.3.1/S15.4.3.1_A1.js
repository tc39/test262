// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Array has property prototype
description: Checking use hasOwnProperty
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.hasOwnProperty('prototype') !== true) {
	$FAIL('#1: Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}
