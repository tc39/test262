// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.36_A1_T3;
 * @section: 15.9.5.36;
 * @assertion: The Date.prototype property "setDate" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.36_A1_T3",

path: "15_Native\15.9_Date_Objects\15.9.5_Properties_of_the_Date_Prototype_Object\15.9.5.36_Date.prototype.setDate\S15.9.5.36_A1_T3.js",

assertion: "The Date.prototype property \"setDate\" has { DontEnum } attributes",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('setDate')) {
  $ERROR('#1: The Date.prototype.setDate property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "setDate") {
    $ERROR('#2: The Date.prototype.setDate has the attribute DontEnum');
  }
}


 }
});

