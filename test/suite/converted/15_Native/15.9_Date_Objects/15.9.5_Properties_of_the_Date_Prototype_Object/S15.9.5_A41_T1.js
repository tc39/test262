// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype has the property "setUTCFullYear"
 *
 * @section: 15.9.5;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/S15.9.5_A41_T1.js;
 * @description: The Date.prototype has the property "setUTCFullYear";
 */

if(Date.prototype.hasOwnProperty("setUTCFullYear") !== true){
  $ERROR('#1: The Date.prototype has the property "setUTCFullYear"');
}


