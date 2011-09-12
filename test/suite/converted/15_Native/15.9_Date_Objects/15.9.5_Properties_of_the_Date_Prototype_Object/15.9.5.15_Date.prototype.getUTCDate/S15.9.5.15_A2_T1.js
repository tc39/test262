// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getUTCDate" is 0
 *
 * @section 15.9.5.15
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.15_Date.prototype.getUTCDate/S15.9.5.15_A2_T1.js
 * @description The "length" property of the "getUTCDate" is 0
 */

if(Date.prototype.getUTCDate.hasOwnProperty("length") !== true){
  $ERROR('#1: The getUTCDate has a "length" property');
}

if(Date.prototype.getUTCDate.length !== 0){
  $ERROR('#2: The "length" property of the getUTCDate is 0');
}


