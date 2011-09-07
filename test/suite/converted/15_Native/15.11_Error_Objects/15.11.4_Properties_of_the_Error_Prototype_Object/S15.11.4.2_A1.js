// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Error.prototype has name property
 *
 * @id: S15.11.4.2_A1;
 * @section: 15.11.4.2, 16;
 * @description: Checking Error.prototype.name;
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('name')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'name\') return true. Actual: '+Error.prototype.hasOwnProperty('name'));
}
//
//////////////////////////////////////////////////////////////////////////////

