// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setUTCDate" has { DontEnum } attributes
 *
 * @section: 15.9.5.37;
 * @path: 15_Native/15.9_Date_Objects/15.9.5_Properties_of_the_Date_Prototype_Object/15.9.5.37_Date.prototype.setUTCDate/S15.9.5.37_A1_T3.js;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.propertyIsEnumerable('setUTCDate')) {
  $ERROR('#1: The Date.prototype.setUTCDate property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "setUTCDate") {
    $ERROR('#2: The Date.prototype.setUTCDate has the attribute DontEnum');
  }
}


