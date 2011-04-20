// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.6_A6;
* @section: 15.2.4.6, 13.2;
* @assertion: Object.prototype.isPrototypeOf has not prototype property;
* @description: Checking if obtaining the prototype property of Object.prototype.isPrototypeOf fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.6_A6",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.6_Object.prototype.isPrototypeOf\S15.2.4.6_A6.js",

assertion: "Object.prototype.isPrototypeOf has not prototype property",

description: "Checking if obtaining the prototype property of Object.prototype.isPrototypeOf fails",

test: function testcase() {
   //CHECK#1
if (Object.prototype.isPrototypeOf.prototype !== undefined) {
  $ERROR('#1: Object.prototype.isPrototypeOf has not prototype property'+Object.prototype.isPrototypeOf.prototype);
}
//

 }
});

