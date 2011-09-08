// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.toLocaleLowerCase.length property has the attribute ReadOnly
 *
 * @section: 15.5.4.17;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A10.js;
 * @description: Checking if varying the String.prototype.toLocaleLowerCase.length property fails;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty('length'))) {
  $FAIL('#1: String.prototype.toLocaleLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

__obj = String.prototype.toLocaleLowerCase.length;

String.prototype.toLocaleLowerCase.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLocaleLowerCase.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.toLocaleLowerCase.length; String.prototype.toLocaleLowerCase.length = function(){return "shifted";}; String.prototype.toLocaleLowerCase.length === __obj. Actual: '+String.prototype.toLocaleLowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

