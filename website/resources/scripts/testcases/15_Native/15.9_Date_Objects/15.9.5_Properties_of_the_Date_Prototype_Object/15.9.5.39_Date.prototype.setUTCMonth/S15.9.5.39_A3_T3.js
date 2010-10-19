// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.39_A3_T3;
 * @section: 15.9.5.39;
 * @assertion: The Date.prototype.setUTCMonth property "length" has { ReadOnly, DontDelete, DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.39_A3_T3",

path: "15.9.5.39",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.setUTCMonth.propertyIsEnumerable('length')) {
  $ERROR('#1: The Date.prototype.setUTCMonth.length property has the attribute DontEnum');
}

for(x in Date.prototype.setUTCMonth) {
  if(x === "length") {
    $ERROR('#2: The Date.prototype.setUTCMonth.length has the attribute DontEnum');
  }
}


 }
});

