// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.5_A10;
* @section: 15.2.4.5;
* @assertion: The Object.prototype.hasOwnProperty.length property has the attribute ReadOnly;
* @description: Checking if varying the Object.prototype.hasOwnProperty.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.5_A10",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.5_Object.prototype.hasOwnProperty\S15.2.4.5_A10.js",

assertion: "The Object.prototype.hasOwnProperty.length property has the attribute ReadOnly",

description: "Checking if varying the Object.prototype.hasOwnProperty.length property fails",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.hasOwnProperty.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.hasOwnProperty has length property.');
}

var obj = Object.prototype.hasOwnProperty.length;

Object.prototype.hasOwnProperty.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.hasOwnProperty.length !== obj) {
  $ERROR('#2: the Object.prototype.hasOwnProperty length property has the attributes ReadOnly.');
}

 }
});

