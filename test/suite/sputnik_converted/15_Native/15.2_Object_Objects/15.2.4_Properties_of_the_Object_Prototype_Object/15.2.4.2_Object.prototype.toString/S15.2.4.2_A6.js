// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.2_A6;
* @section: 15.2.4.2, 13.2;
* @assertion: Object.prototype.toString has not prototype property;
* @description: Checking if obtaining the prototype property of Object.prototype.toString fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.2_A6",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.2_Object.prototype.toString\S15.2.4.2_A6.js",

assertion: "Object.prototype.toString has not prototype property",

description: "Checking if obtaining the prototype property of Object.prototype.toString fails",

test: function testcase() {
   //CHECK#1
if (Object.prototype.toString.prototype !== undefined) {
  $ERROR('#1: Object.prototype.toString has not prototype property'+Object.prototype.toString.prototype);
}
//

 }
});

