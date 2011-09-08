// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The "length" property of the "setTime" is 1
 *
 * @section: 15.9.5.27;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.27_Date.prototype.setTime/S15.9.5.27_A2_T1.js;
 * @description: The "length" property of the "setTime" is 1;
 */

if(Date.prototype.setTime.hasOwnProperty("length") !== true){
  $ERROR('#1: The setTime has a "length" property');
}

if(Date.prototype.setTime.length !== 1){
  $ERROR('#2: The "length" property of the setTime is 1');
}


