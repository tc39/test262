// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A7;
* @section: 15.5.4.16, 13.2;
* @assertion: String.prototype.toLowerCase can't be used as constructor;
* @description: Checking if creating the String.prototype.toLowerCase object fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A7",

path: "15_Native\15.5_String_Objects\15.5.4_Properties_of_the_String_Prototype_Object\15.5.4.16_String.prototype.toLowerCase\S15.5.4.16_A7.js",

assertion: "String.prototype.toLowerCase can\'t be used as constructor",

description: "Checking if creating the String.prototype.toLowerCase object fails",

test: function testcase() {
   var __FACTORY = String.prototype.toLowerCase;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: var __FACTORY = String.prototype.toLowerCase; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.1: var __FACTORY = String.prototype.toLowerCase; "__instance = new __FACTORY" throws a TypeError. Actual: ' + (e));  
  }
};


 }
});

