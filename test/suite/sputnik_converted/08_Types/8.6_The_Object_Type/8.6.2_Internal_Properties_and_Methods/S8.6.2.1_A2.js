// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.1_A2;
* @section: 8.6.2.1;
* @assertion: [[Get]](P) method should return undefined when property P does not exist both in instance and prototype;
* @description: Try to get P when property P does not exist both in instance and prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.1_A2",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2.1_A2.js",

assertion: "[[Get]](P) method should return undefined when property P does not exist both in instance and prototype",

description: "Try to get P when property P does not exist both in instance and prototype",

test: function testcase() {
   var __obj={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.propFoo !== undefined){
  $ERROR('#1: var __obj={}; __obj.propFoo === undefined. Actual: ' + (__obj.propFoo));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj['propFoo'] !== undefined){
  $ERROR('#2: var __obj={}; __obj[\'propFoo\'] === undefined. Actual: ' + (__obj['propFoo']));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

