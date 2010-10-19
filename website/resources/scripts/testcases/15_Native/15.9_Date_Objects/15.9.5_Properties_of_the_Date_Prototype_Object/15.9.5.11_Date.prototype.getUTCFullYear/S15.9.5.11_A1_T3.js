// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.11_A1_T3;
 * @section: 15.9.5.11;
 * @assertion: The Date.prototype property "getUTCFullYear" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.11_A1_T3",

path: "15.9.5.11",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('getUTCFullYear')) {
  $ERROR('#1: The Date.prototype.getUTCFullYear property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "getUTCFullYear") {
    $ERROR('#2: The Date.prototype.getUTCFullYear has the attribute DontEnum');
  }
}


 }
});

