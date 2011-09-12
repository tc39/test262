// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.toLowerCase.length property has the attribute DontDelete
 *
 * @section 15.5.4.16
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.16_String.prototype.toLowerCase/S15.5.4.16_A9.js
 * @description Checking if deleting the String.prototype.toLowerCase.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.toLowerCase.length) {
  $ERROR('#1: delete String.prototype.toLowerCase.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.toLowerCase.length; String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

