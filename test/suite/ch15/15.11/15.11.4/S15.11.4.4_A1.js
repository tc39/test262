// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Error.prototype has toString property
description: Checking Error.prototype.toString
---*/

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('toString')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'toString\') return true. Actual: '+Error.prototype.hasOwnProperty('toString'));
}
//
//////////////////////////////////////////////////////////////////////////////
