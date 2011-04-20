// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.1_A3.1_T1;
 * @section: 15.4.1, 11.4.3, 11.8.6;
 * @assertion: When Array is called as a function rather than as a constructor, 
 * it creates and initialises a new Array object;
 * @description: Checking use typeof, instanceof; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.1_A3.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.1_The_Array_Constructor_Called_as_a_Function\S15.4.1_A3.1_T1.js",

assertion: "When Array is called as a function rather than as a constructor,",

description: "Checking use typeof, instanceof",

test: function testcase() {
   //CHECK#1
if (typeof Array() !== "object") {
  $ERROR('#1: typeof Array() === "object". Actual: ' + (typeof Array()));
}  

//CHECK#2
if ((Array() instanceof Array) !== true) {
  $ERROR('#2: (Array() instanceof Array) === true. Actual: ' + (Array() instanceof Array));
}  

 }
});

