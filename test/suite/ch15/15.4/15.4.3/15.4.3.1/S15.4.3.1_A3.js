// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Array.prototype property has the attribute DontDelete
es5id: 15.4.3.1_A3
description: Checking if deleting the Array.prototype property fails
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.hasOwnProperty('prototype') !== true) {
	$FAIL('#1: Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}

delete Array.prototype;

//CHECK#2
if (Array.hasOwnProperty('prototype') !== true) {
	$ERROR('#2: delete Array.prototype; Array.hasOwnProperty(\'prototype\') === true. Actual: ' + (Array.hasOwnProperty('prototype')));
}

//CHECK#3
if (Array.prototype === undefined) {
  $ERROR('#3: delete Array.prototype; Array.prototype !== undefined');
}
