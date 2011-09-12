// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.charCodeAt.length property has the attribute DontDelete
 *
 * @section 15.5.4.5
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.5_String.prototype.charCodeAt/S15.5.4.5_A9.js
 * @description Checking if deleting the String.prototype.charCodeAt.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charCodeAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.charCodeAt.length) {
  $ERROR('#1: delete String.prototype.charCodeAt.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.charCodeAt.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.charCodeAt.length; String.prototype.charCodeAt.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.charCodeAt.hasOwnProperty('length')); 
}
//
//////////////////////////////////////////////////////////////////////////////

