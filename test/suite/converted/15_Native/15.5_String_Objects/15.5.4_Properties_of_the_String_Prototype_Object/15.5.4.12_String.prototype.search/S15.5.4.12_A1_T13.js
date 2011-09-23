// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A1_T13.js
 * @description Argument is object, and instance is string.
 * Object with overrided toString and valueOf functions
 */

var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041B\u0031ABAB\u0031BBAA".search(__obj) !==5) {
  $ERROR('#1: var __obj = {toString:function(){return {};},valueOf:function(){return 1;}}; "ABB\\u0041B\\u0031ABAB\\u0031BBAA".search(__obj) ===5. Actual: '+("ABB\u0041B\u0031ABAB\u0031BBAA".search(__obj)) );
}
//
//////////////////////////////////////////////////////////////////////////////

