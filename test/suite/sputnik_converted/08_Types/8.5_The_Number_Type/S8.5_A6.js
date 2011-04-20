// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A6;
 * @section: 8.5, 7.8.3;
 * @assertion: -Infinity expression has a type Number;
 * @description: Check type of -Infinity; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A6",

path: "08_Types\8.5_The_Number_Type\S8.5_A6.js",

assertion: "-Infinity expression has a type Number",

description: "Check type of -Infinity",

test: function testcase() {
   var x=-Infinity;

///////////////////////////////////////////////////////
// CHECK#1
if (typeof(x) !== "number"){
  $ERROR('#1: var x=-Infinity; typeof(x) === "number". Actual: ' + (typeof(x)));
}
//
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// CHECK#2
if (typeof(-Infinity) !== "number"){
  $ERROR('#2: typeof(-Infinity) === "number". Actual: ' + (typeof(-Infinity)));
}
//
//////////////////////////////////////////////////////////

 }
});

