// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setUTCMonth" is 2
 *
 * @id: S15.9.5.39_A2_T1;
 * @section: 15.9.5.39;
 * @description: The "length" property of the "setUTCMonth" is 2;
 */

if(Date.prototype.setUTCMonth.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCMonth has a "length" property');
}

if(Date.prototype.setUTCMonth.length !== 2){
  $ERROR('#2: The "length" property of the setUTCMonth is 2');
}


