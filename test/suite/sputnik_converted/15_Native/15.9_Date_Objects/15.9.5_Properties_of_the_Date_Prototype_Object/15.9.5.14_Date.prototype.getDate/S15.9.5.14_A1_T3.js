// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.14_A1_T3;
 * @section: 15.9.5.14;
 * @assertion: The Date.prototype property "getDate" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.14_A1_T3",

path: "15.9.5.14",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('getDate')) {
  $ERROR('#1: The Date.prototype.getDate property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getDate") {
    $ERROR('#2: The Date.prototype.getDate has the attribute DontEnum');
  }
}


 }
});

