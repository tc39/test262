// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.lastIndexOf.length property has the attribute DontDelete
 *
 * @section: 15.5.4.8;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A9.js;
 * @description: Checking if deleting the String.prototype.lastIndexOf.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.lastIndexOf.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.lastIndexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.lastIndexOf.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.lastIndexOf.length) {
  $ERROR('#1: delete String.prototype.lastIndexOf.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.lastIndexOf.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.lastIndexOf.length; String.prototype.lastIndexOf.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.lastIndexOf.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

