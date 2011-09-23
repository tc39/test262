// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setFullYear" is 3
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.40_Date.prototype.setFullYear/S15.9.5.40_A2_T1.js
 * @description The "length" property of the "setFullYear" is 3
 */

if(Date.prototype.setFullYear.hasOwnProperty("length") !== true){
  $ERROR('#1: The setFullYear has a "length" property');
}

if(Date.prototype.setFullYear.length !== 3){
  $ERROR('#2: The "length" property of the setFullYear is 3');
}


