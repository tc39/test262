// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setUTCFullYear" is 3
 *
 * @section: 15.9.5.41;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.41_Date.prototype.setUTCFullYear/S15.9.5.41_A2_T1.js;
 * @description: The "length" property of the "setUTCFullYear" is 3;
 */

if(Date.prototype.setUTCFullYear.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCFullYear has a "length" property');
}

if(Date.prototype.setUTCFullYear.length !== 3){
  $ERROR('#2: The "length" property of the setUTCFullYear is 3');
}


