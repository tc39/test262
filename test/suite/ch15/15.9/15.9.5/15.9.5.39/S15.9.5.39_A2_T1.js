// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setUTCMonth" is 2
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.39_Date.prototype.setUTCMonth/S15.9.5.39_A2_T1.js
 * @description The "length" property of the "setUTCMonth" is 2
 */

if(Date.prototype.setUTCMonth.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCMonth has a "length" property');
}

if(Date.prototype.setUTCMonth.length !== 2){
  $ERROR('#2: The "length" property of the setUTCMonth is 2');
}


