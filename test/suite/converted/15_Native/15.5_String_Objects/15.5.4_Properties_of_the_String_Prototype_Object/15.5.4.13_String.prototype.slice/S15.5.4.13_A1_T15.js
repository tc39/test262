// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.slice (start, end)
 *
 * @section: 15.5.4.13;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.13_String.prototype.slice/S15.5.4.13_A1_T15.js;
 * @description: Call slice without arguments. Instance is Number with prototype.slice = String.prototype.slice;
 */

var __num = 11.001002;

Number.prototype.slice = String.prototype.slice;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__num.slice()!=="11.001002") {
  $ERROR('#1: var __num = 11.001002; Number.prototype.slice = String.prototype.slice; __num.slice()==="11.001002". Actual: '+__num.slice());
}
//
//////////////////////////////////////////////////////////////////////////////

