// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype has the property "setFullYear"
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/S15.9.5_A40_T1.js
 * @description The Date.prototype has the property "setFullYear"
 */

if(Date.prototype.hasOwnProperty("setFullYear") !== true){
  $ERROR('#1: The Date.prototype has the property "setFullYear"');
}


