// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "getUTCMilliseconds" is 0
 *
 * @section 15.9.5.25
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.25_Date.prototype.getUTCMilliseconds/S15.9.5.25_A2_T1.js
 * @description The "length" property of the "getUTCMilliseconds" is 0
 */

if(Date.prototype.getUTCMilliseconds.hasOwnProperty("length") !== true){
  $ERROR('#1: The getUTCMilliseconds has a "length" property');
}

if(Date.prototype.getUTCMilliseconds.length !== 0){
  $ERROR('#2: The "length" property of the getUTCMilliseconds is 0');
}


