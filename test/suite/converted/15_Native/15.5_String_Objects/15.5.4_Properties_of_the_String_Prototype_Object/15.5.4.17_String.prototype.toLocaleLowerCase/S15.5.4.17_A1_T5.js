// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @section: 15.5.4.17;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A1_T5.js;
 * @description: Call toLocaleLowerCase() function for function call;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" match(null) evaluates to match("null")
if (function(){return "GnulLuNa"}().toLocaleLowerCase() !== "gnulluna") {
  $ERROR('#1: function(){return "GnulLuNa"}().toLocaleLowerCase() === "gnulluna". Actual: '+function(){return "GnulLuNa"}().toLocaleLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

