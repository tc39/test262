// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Error.prototype has message property
 *
 * @section 15.11.4.3, 16
 * @path 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.3_A1.js
 * @description Checking Error.prototype.message
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('message')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'message\') reurn true. Actual: '+Error.prototype.hasOwnProperty('message'));
}
//
//////////////////////////////////////////////////////////////////////////////

