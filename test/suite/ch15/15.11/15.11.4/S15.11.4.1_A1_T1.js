// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The initial value of Error.prototype.constructor is the built-in Error
    constructor
description: Checking Error.prototype.constructor
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (Error.prototype.constructor !== Error) {
	$ERROR('#1: Error.prototype.constructor === Error. Actual: '+Error.prototype.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////
