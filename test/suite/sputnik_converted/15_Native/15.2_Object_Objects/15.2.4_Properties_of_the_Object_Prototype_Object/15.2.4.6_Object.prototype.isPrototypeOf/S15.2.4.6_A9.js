// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.6_A9;
* @section: 15.2.4.6;
* @assertion: The Object.prototype.isPrototypeOf.length property has the attribute DontDelete;
* @description: Checking deleting the Object.prototype.isPrototypeOf.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.6_A9",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.6_Object.prototype.isPrototypeOf\S15.2.4.6_A9.js",

assertion: "The Object.prototype.isPrototypeOf.length property has the attribute DontDelete",

description: "Checking deleting the Object.prototype.isPrototypeOf.length property fails",

test: function testcase() {
   //CHECK#0
if (!(Object.prototype.isPrototypeOf.hasOwnProperty('length'))) {
  $FAIL('#0: the Object.prototype.isPrototypeOf has length property');
}

//CHECK#1
if (delete Object.prototype.isPrototypeOf.length) {
  $ERROR('#1: The Object.prototype.isPrototypeOf.length property has the attributes DontDelete');
}
//

 }
});

