// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.4_A2;
 * @section: 15.6.4;
 * @assertion: The value of the internal [[Prototype]] property of the Boolean 
 * prototype object is the Object prototype object;
 * @description: Checking Object.prototype.isPrototypeOf(Boolean.prototype);
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.4_A2",

path: "15_Native\15.6_Boolean_Objects\15.6.4_Properties_of_the_Boolean_Prototype_Object\S15.6.4_A2.js",

assertion: "The value of the internal [[Prototype]] property of the Boolean",

description: "Checking Object.prototype.isPrototypeOf(Boolean.prototype)",

test: function testcase() {
   //CHECK#1
if (!Object.prototype.isPrototypeOf(Boolean.prototype)) {
  $ERROR('#1: Object prototype object is the prototype of Boolean prototype object');
}

 }
});

