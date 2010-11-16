// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.34_A1_T3;
 * @section: 15.9.5.34;
 * @assertion: The Date.prototype property "setHours" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.34_A1_T3",

path: "15.9.5.34",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('setHours')) {
  $ERROR('#1: The Date.prototype.setHours property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "setHours") {
    $ERROR('#2: The Date.prototype.setHours has the attribute DontEnum');
  }
}


 }
});

