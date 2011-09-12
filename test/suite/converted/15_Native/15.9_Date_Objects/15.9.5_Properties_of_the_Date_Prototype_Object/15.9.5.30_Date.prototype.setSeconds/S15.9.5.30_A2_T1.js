// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setSeconds" is 2
 *
 * @section 15.9.5.30
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.30_Date.prototype.setSeconds/S15.9.5.30_A2_T1.js
 * @description The "length" property of the "setSeconds" is 2
 */

if(Date.prototype.setSeconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The setSeconds has a "length" property');
}

if(Date.prototype.setSeconds.length !== 2){
  $ERROR('#2: The "length" property of the setSeconds is 2');
}


