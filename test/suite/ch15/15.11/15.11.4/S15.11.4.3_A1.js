// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Error.prototype has message property
description: Checking Error.prototype.message
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('message')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'message\') reurn true. Actual: '+Error.prototype.hasOwnProperty('message'));
}
//
//////////////////////////////////////////////////////////////////////////////
