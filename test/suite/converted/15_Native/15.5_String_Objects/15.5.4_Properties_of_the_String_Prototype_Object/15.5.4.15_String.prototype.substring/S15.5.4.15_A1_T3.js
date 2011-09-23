// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.substring (start, end)
 *
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.15_String.prototype.substring/S15.5.4.15_A1_T3.js
 * @description Checking by using eval
 */

var substring = String.prototype.substring;

if (typeof toString === "undefined"){
    toString = Object.prototype.toString;
}

var __class__ = toString();
var __toggle = 1;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (substring(eval("\"1\""),{valueOf:function(){return "0x0007"}})!=="object") {
  $ERROR('#1: substring(eval("\\"1\\""),{valueOf:function(){return "0x0007"}})==="object". Actual: '+substring(eval("\"1\""),{valueOf:function(){return "0x0007"}}));
};
//
//////////////////////////////////////////////////////////////////////////////

