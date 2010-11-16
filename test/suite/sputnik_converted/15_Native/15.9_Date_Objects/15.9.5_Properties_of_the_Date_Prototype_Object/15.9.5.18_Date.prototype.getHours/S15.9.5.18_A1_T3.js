// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.18_A1_T3;
 * @section: 15.9.5.18;
 * @assertion: The Date.prototype property "getHours" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.18_A1_T3",

path: "15.9.5.18",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('getHours')) {
  $ERROR('#1: The Date.prototype.getHours property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getHours") {
    $ERROR('#2: The Date.prototype.getHours has the attribute DontEnum');
  }
}


 }
});

