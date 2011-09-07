// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Date.prototype property "setMonth" has { DontEnum } attributes
 *
 * @id: S15.9.5.38_A1_T3;
 * @section: 15.9.5.38;
 * @description: Checking DontEnum attribute;
 */

if (Date.prototype.propertyIsEnumerable('setMonth')) {
  $ERROR('#1: The Date.prototype.setMonth property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "setMonth") {
    $ERROR('#2: The Date.prototype.setMonth has the attribute DontEnum');
  }
}


