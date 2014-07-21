// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The initial value of RegExp.prototype.constructor is the built-in RegExp
    constructor
description: Compare RegExp.prototype.constructor with RegExp
---*/

//CHECK#1
if (RegExp.prototype.constructor !== RegExp) {
	$ERROR('#1: RegExp.prototype.constructor === RegExp. Actual: ' + (RegExp.prototype.constructor));
}
