// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.parse property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.2_Date.parse/S15.9.4.2_A3_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.parse.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.parse.length property has the attribute DontEnum');
}

for(x in Date.parse) {
  if(x === "length") {
    $ERROR('#2: The Date.parse.length has the attribute DontEnum');
  }
}


