// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.lastIndexOf(searchString, position)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.8_String.prototype.lastIndexOf/S15.5.4.8_A1_T9.js
 * @description Call lastIndexOf(searchString, position) function with function(){}() argument of string object
 */

var __obj = {
  valueOf:function(){},
  toString:void 0
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" indexOf(undefined) evaluates to indexOf("undefined")
if (new String(__obj).lastIndexOf(function(){}()) !== 0) {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).lastIndexOf(function(){}()) === 0. Actual: '+new String(__obj).lastIndexOf(function(){}()) );
}
//
//////////////////////////////////////////////////////////////////////////////

