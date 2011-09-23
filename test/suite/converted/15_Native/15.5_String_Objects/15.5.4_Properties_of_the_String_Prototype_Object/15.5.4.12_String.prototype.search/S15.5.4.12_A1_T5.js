// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A1_T5.js
 * @description Argument is null, and instance is function call, that return string
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" search(null) evaluates to search("null")
if (function(){return "gnulluna"}().search(null) !== 1) {
  $ERROR('#1: function(){return "gnulluna"}().search(null) === 1. Actual: '+function(){return "gnulluna"}().search(null) );
}
//
//////////////////////////////////////////////////////////////////////////////

