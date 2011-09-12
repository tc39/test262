// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toLocaleLowerCase()
 *
 * @section 15.5.4.17
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.17_String.prototype.toLocaleLowerCase/S15.5.4.17_A1_T11.js
 * @description Override toString function, toString throw exception, then call toLocaleLowerCase() function for this object
 */

var __obj = {toString:function(){throw "intostr";}}
__obj.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLocaleLowerCase();
   	$FAIL('#1: "var x = __obj.toLocaleLowerCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

