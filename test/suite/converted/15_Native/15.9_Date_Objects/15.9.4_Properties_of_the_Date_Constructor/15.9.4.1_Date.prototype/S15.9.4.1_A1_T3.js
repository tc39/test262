// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date property "prototype" has { DontEnum, DontDelete, ReadOnly } attributes
 *
 * @section 15.9.4.1
 * @path 15_Native/15.9_Date_Objects/15.9.4_Properties_of_the_Date_Constructor/15.9.4.1_Date.prototype/S15.9.4.1_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.propertyIsEnumerable('prototype')) {
  $ERROR('#1: The Date.prototype property has the attribute DontEnum');
}

for(x in Date) {
  if(x === "prototype") {
    $ERROR('#2: The Date.prototype has the attribute DontEnum');
  }
}


