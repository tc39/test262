// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Error.prototype has name property
 *
 * @section: 15.11.4.2, 16;
 * @path: 15_Native/15.11_Error_Objects/15.11.4_Properties_of_the_Error_Prototype_Object/S15.11.4.2_A1.js;
 * @description: Checking Error.prototype.name;
 */

//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (!Error.prototype.hasOwnProperty('name')) {
	$ERROR('#1: Error.prototype.hasOwnProperty(\'name\') return true. Actual: '+Error.prototype.hasOwnProperty('name'));
}
//
//////////////////////////////////////////////////////////////////////////////

