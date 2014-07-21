// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The [[Class]] property of the newly constructed object is set to "RegExp"
description: Checking [[Class]] property of the newly constructed object
---*/

__re = new RegExp;
__re.toString = Object.prototype.toString;

//CHECK#1
if (__re.toString() !== "[object "+"RegExp"+"]") {
	$ERROR('#1: __re = new RegExp; __re.toString = Object.prototype.toString; __re.toString() === "[object "+"RegExp"+"]". Actual: ' + (__re.toString()));
}
