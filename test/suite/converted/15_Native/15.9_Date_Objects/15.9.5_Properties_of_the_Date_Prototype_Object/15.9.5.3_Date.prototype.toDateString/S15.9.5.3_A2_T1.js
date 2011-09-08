// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "toDateString" is 0
 *
 * @section: 15.9.5.3;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.3_Date.prototype.toDateString/S15.9.5.3_A2_T1.js;
 * @description: The "length" property of the "toDateString" is 0;
 */

if(Date.prototype.toDateString.hasOwnProperty("length") !== true){
  $ERROR('#1: The toDateString has a "length" property');
}

if(Date.prototype.toDateString.length !== 0){
  $ERROR('#2: The "length" property of the toDateString is 0');
}


