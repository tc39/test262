// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Number.NaN has the attribute DontEnum
 *
 * @section: 15.7.3.4;
 * @path: 15_Native/15.7_Number_Objects/15.7.3_Properties_of_Number_Constructor/15.7.3.4_Number.NaN/S15.7.3.4_A4.js;
 * @description: Checking if enumerating Number.NaN fails;
 */

//CHECK#1
for(var x in Number) {
  if(x === "NaN") {
    $ERROR('#1: Number.NaN has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('NaN')) {
  $ERROR('#2: Number.NaN has the attribute DontEnum');
}

