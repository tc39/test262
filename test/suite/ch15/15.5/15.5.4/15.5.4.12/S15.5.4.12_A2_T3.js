// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp) returns ...
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A2_T3.js
 * @description Checking disabling of case sensitive of search, argument is RegExp
 */

var aString = new String("test string");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (aString.search(/String/i)!== 5) {
  $ERROR('#1: var aString = new String("test string"); aString.search(/String/i)=== 5. Actual: '+aString.search(/String/i));
}
//
//////////////////////////////////////////////////////////////////////////////

