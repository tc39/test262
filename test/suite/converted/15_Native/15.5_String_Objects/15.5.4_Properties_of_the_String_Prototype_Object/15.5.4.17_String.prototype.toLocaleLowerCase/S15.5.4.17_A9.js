// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.toLocaleLowerCase.length property has the attribute DontDelete
 *
 * @section: 15.5.4.17;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A9.js;
 * @description: Checking if deleting the String.prototype.toLocaleLowerCase.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.toLocaleLowerCase.length) {
  $ERROR('#1: delete String.prototype.toLocaleLowerCase.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.toLocaleLowerCase.length; String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

