// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Boolean constructor has length property whose value is 1
 *
 * @section: 15.6.3;
 * @path: 15_Native/15.6_Boolean_Objects/15.6.3_Properties_of_the_Boolean_Constructor/S15.6.3_A3.js;
 * @description: Checking Boolean.length property;
 */

//CHECK#1
if (!Boolean.hasOwnProperty("length")){
  $ERROR('#1: Boolean constructor has length property');
}

//CHECK#2
if (Boolean.length !== 1) {
  $ERROR('#2: Boolean constructor length property value is 1');
}

