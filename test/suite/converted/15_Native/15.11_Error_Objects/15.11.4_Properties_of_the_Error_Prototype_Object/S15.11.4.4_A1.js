// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Error.prototype has toString property
 *
 * @section 15.11.4.4, 16
 * @path 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.4_A1.js
 * @description Checking Error.prototype.toString
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('toString')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'toString\') return true. Actual: '+Error.prototype.hasOwnProperty('toString'));
}
//
//////////////////////////////////////////////////////////////////////////////

