// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Boolean constructor has the property "prototype"
 *
 * @section 15.6.3
 * @path 15_Native/15.6_Boolean_Objects/15.6.3_Properties_of_the_Boolean_Constructor/S15.6.3_A1.js
 * @description Checking existence of the property "prototype"
 */

if(!Boolean.hasOwnProperty("prototype")){
  $ERROR('#1: The Boolean constructor has the property "prototype"');
}


