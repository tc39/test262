// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A3;
 * @section: 8.5, 7.8.3;
 * @assertion: NaN expression has a type Number;
 * @description: Check type of NaN; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A3",

path: "08_Types\8.5_The_Number_Type\S8.5_A3.js",

assertion: "NaN expression has a type Number",

description: "Check type of NaN",

test: function testcase() {
   var x=NaN;

///////////////////////////////////////////////////////
// CHECK#1
if (typeof(x) !== "number"){
  $ERROR('#1: var x=NaN; typeof(x) === "number". Actual: ' + (typeof(x)));
}
//
//////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// CHECK#2
if (typeof(NaN) !== "number"){
  $ERROR('#2: typeof(NaN) === "number". Actual: ' + (typeof(NaN)));
}
//
//////////////////////////////////////////////////////////

 }
});

