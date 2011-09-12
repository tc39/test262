// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.toString have length property and it is equal 0
 *
 * @section 15.5.4.2
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/S15.5.4.2_A4_T1.js
 * @description Checking String.prototype.toString.length property
 */

//CHECK#1
if (String.prototype.toString.hasOwnProperty('length')!==true){
  $ERROR('#1: String.prototype.toString.hasOwnProperty(\'length\')===true. Actual: '+String.prototype.toString.hasOwnProperty('length')); 
}
else{
//CHECK#2
if (String.prototype.toString.length!==0)
  $ERROR('#2: String.prototype.toString.length===0. Actual: String.prototype.toString.length==='+String.prototype.toString.length); 
}

