// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getUTCMonth" is 0
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.13_Date.prototype.getUTCMonth/S15.9.5.13_A2_T1.js
 * @description The "length" property of the "getUTCMonth" is 0
 */

if(Date.prototype.getUTCMonth.hasOwnProperty("length") !== true){
  $ERROR('#1: The getUTCMonth has a "length" property');
}

if(Date.prototype.getUTCMonth.length !== 0){
  $ERROR('#2: The "length" property of the getUTCMonth is 0');
}


