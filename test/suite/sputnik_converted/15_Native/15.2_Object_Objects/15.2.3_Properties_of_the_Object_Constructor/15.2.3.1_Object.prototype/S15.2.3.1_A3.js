  // Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.3.1_A3;
* @section: 15.2.3.1, 15.2.4;
* @assertion: The Object.prototype property has the attribute DontDelete;
* @description: Checking if deleting "Object.prototype" property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.3.1_A3",

path: "15_Native\15.2_Object_Objects\15.2.3_Properties_of_the_Object_Constructor\15.2.3.1_Object.prototype\S15.2.3.1_A3.js",

assertion: "The Object.prototype property has the attribute DontDelete",

description: "Checking if deleting \"Object.prototype\" property fails",

test: function testcase() {
   delete Object.prototype;

//CHECK#2
if (!(Object.hasOwnProperty('prototype'))) {
  $ERROR('#2: the Object.prototype property has the attributes DontDelete.');
}

 }
});

