// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2_A3;
* @section: 8.6.2, 15.2.4.2;
* @assertion: The specification does not provide any means for a program to access [[class]] value except through Object.prototype.toString;
* @description: Get [[class]] value except through Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2_A3",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2_A3.js",

assertion: "The specification does not provide any means for a program to access [[class]] value except through Object.prototype.toString",

description: "Get [[class]] value except through Object.prototype.toString",

test: function testcase() {
   var __obj={};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.toString() !== "[object " + 'Object' + "]"){
  $ERROR('#1: var __obj={}; __obj.toString() === "[object " + \'Object\' + "]". Actual: ' + (__obj.toString()));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

