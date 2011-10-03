// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The String.prototype.localeCompare.length property has the attribute ReadOnly
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.9_String.prototype.localeCompare/S15.5.4.9_A10.js
 * @description Checking if varying the String.prototype.localeCompare.length property fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#1: String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype.localeCompare.length;

String.prototype.localeCompare.length = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.localeCompare.length !== __obj) {
  $ERROR('#2: __obj = String.prototype.localeCompare.length; String.prototype.localeCompare.length = function(){return "shifted";}; String.prototype.localeCompare.length === __obj. Actual: '+String.prototype.localeCompare.length );
}
//
//////////////////////////////////////////////////////////////////////////////

