// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getMinutes" is 0
 *
 * @section 15.9.5.20
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.20_Date.prototype.getMinutes/S15.9.5.20_A2_T1.js
 * @description The "length" property of the "getMinutes" is 0
 */

if(Date.prototype.getMinutes.hasOwnProperty("length") !== true){
  $ERROR('#1: The getMinutes has a "length" property');
}

if(Date.prototype.getMinutes.length !== 0){
  $ERROR('#2: The "length" property of the getMinutes is 0');
}


