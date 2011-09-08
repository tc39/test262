// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T9.js;
 * @description: Arguments are undefined and object, and instance is String(object), object have overrided valueOf and toString functions;
 */

var __obj = {
    valueOf:function(){},
    toString:void 0
};

//since ToInteger(undefined) yelds 0
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (new String(__obj).slice(/*(function(){})()*/undefined,__obj) !== "") {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; new String(__obj).slice(//*(function(){})()*//undefined,__obj) === "". Actual: '+new String(__obj).slice(/*(function(){})()*/undefined,__obj) );
}
//
//////////////////////////////////////////////////////////////////////////////

