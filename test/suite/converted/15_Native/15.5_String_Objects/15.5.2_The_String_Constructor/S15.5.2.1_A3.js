// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The [[Class]] property of the newly constructed object is set to "String"
 *
 * @section 15.5.2.1
 * @path 15_Native/15.5_String_Objects/15.5.2_The_String_Constructor/S15.5.2.1_A3.js
 * @description Creating string object with "new String(string)" and changing toString property to Object.prototype.toString
 */

var __str__obj = new String("seamaid");

__str__obj.toString = Object.prototype.toString;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str__obj.toString() !== "[object "+"String"+"]") {
  $ERROR('#1: var __str__obj = new String("seamaid"); __str__obj.toString = Object.prototype.toString; __str__obj.toString() === "[object String]". Actual: __str__obj.toString() ==='+__str__obj.toString() ); 
}
//
//////////////////////////////////////////////////////////////////////////////


