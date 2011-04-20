// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.2_A10;
* @section: 15.2.4.2;
* @assertion: The Object.prototype.toString.length property has the attribute ReadOnly;
* @description: Checking if varying the Object.prototype.toString.length property fails;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.2_A10",

path: "15_Native\15.2_Object_Objects\15.2.4_Properties_of_the_Object_Prototype_Object\15.2.4.2_Object.prototype.toString\S15.2.4.2_A10.js",

assertion: "The Object.prototype.toString.length property has the attribute ReadOnly",

description: "Checking if varying the Object.prototype.toString.length property fails",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.toString.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.toString has length property.');
}

var obj = Object.prototype.toString.length;

Object.prototype.toString.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.toString.length !== obj) {
  $ERROR('#2: the Object.prototype.toString length property has the attributes ReadOnly.');
}

 }
});

