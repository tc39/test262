// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NEGATIVE_INFINITY has the attribute DontEnum
 *
 * @section: 15.7.3.5;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.5_Number.NEGATIVE_INFINITY/S15.7.3.5_A4.js;
 * @description: Checking if enumerating Number.NEGATIVE_INFINITY fails;
 */

//CHECK#1
for(var x in Number) {
  if(x === "NEGATIVE_INFINITY") {
    $ERROR('#1: Number.NEGATIVE_INFINITY has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('NEGATIVE_INFINITY')) {
  $ERROR('#2: Number.NEGATIVE_INFINITY has the attribute DontEnum');
}

