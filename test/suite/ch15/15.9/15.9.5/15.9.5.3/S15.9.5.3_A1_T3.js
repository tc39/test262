// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "toDateString" has { DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.3_Date.prototype.toDateString/S15.9.5.3_A1_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.propertyIsEnumerable('toDateString')) {
  $ERROR('#1: The Date.prototype.toDateString property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "toDateString") {
    $ERROR('#2: The Date.prototype.toDateString has the attribute DontEnum');
  }
}


