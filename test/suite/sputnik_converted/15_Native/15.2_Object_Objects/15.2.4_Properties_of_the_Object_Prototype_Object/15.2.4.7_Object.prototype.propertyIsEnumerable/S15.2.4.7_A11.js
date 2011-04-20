// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.7_A11;
* @section: 15.2.4.7;
* @assertion: The length property of the hasOwnProperty method is 1;
* @description: Checking the value of Object.prototype.hasOwnProperty.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.7_A11",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.7_Object.prototype.propertyIsEnumerable\S15.2.4.7_A11.js",

assertion: "The length property of the hasOwnProperty method is 1",

description: "Checking the value of Object.prototype.hasOwnProperty.length",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.propertyIsEnumerable.hasOwnProperty("length"))) {
  $ERROR('#1: the Object.prototype.propertyIsEnumerable has length property');
}

//CHECK#2
if (Object.prototype.propertyIsEnumerable.length !== 1) {
  $ERROR('#2: The length property of the toObject method is 1');
}

 }
});

