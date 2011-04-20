// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.6_A11;
* @section: 15.2.4.6;
* @assertion: The length property of the hasOwnProperty method is 1;
* @description: Checking the Object.prototype.hasOwnProperty.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.6_A11",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.6_Object.prototype.isPrototypeOf\S15.2.4.6_A11.js",

assertion: "The length property of the hasOwnProperty method is 1",

description: "Checking the Object.prototype.hasOwnProperty.length",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.isPrototypeOf.hasOwnProperty("length"))) {
  $ERROR('#1: the Object.prototype.isPrototypeOf has length property');
}

//CHECK#2
if (Object.prototype.isPrototypeOf.length !== 1) {
  $ERROR('#2: The length property of the toObject method is 1');
}

 }
});

