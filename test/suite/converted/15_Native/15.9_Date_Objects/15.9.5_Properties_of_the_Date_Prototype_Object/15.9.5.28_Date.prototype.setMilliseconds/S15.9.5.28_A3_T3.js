// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype.setMilliseconds property "length" has { ReadOnly, DontDelete, DontEnum } attributes
 *
 * @path 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.28_Date.prototype.setMilliseconds/S15.9.5.28_A3_T3.js
 * @description Checking DontEnum attribute
 */

if (Date.prototype.setMilliseconds.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setMilliseconds.length property has the attribute DontEnum');
}

for(x in Date.prototype.setMilliseconds) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.setMilliseconds.length has the attribute DontEnum');
  }
}


