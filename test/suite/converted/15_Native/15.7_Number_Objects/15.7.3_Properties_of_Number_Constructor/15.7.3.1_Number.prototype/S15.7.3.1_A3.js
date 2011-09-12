// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.prototype value is +0
 *
 * @section 15.7.3.1
 * @path 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.1_Number.prototype/S15.7.3.1_A3.js
 * @description Checking value of Number.prototype property
 */

//CHECK#1
if (Number.prototype != 0) {
  $ERROR('#2: Number.prototype == +0');
} else if( 1/Number.prototype != Number.POSITIVE_INFINITY){
  $ERROR('#2: Number.prototype == +0');
}

