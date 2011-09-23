// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function constructor has the property "prototype"
 *
 * @path 15_Native/15.3_Function_Objects/15.3.3_Properties_of_the_Function_Constructor/S15.3.3_A1.js
 * @description Checking existence of the property "prototype"
 */

if(!Function.hasOwnProperty("prototype")){
  $ERROR('#1: The Function constructor has the property "prototype"');
}


