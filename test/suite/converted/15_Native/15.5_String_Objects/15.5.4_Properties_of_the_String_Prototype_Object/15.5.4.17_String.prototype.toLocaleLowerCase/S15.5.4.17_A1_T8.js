// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A1_T8.js
 * @description Call toLocaleLowerCase() function of Infinity
 */

Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

if (Infinity.toLocaleLowerCase()!== "infinity") {
  $ERROR('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; Infinity.toLocaleLowerCase()=== "infinity". Actual: '+Infinity.toLocaleLowerCase());
}

