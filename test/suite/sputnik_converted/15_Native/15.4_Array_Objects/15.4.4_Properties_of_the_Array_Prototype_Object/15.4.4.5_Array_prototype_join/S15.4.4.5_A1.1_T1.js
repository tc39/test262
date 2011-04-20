// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.5_A1.1_T1;
 * @section: 15.4.4.5;
 * @assertion: If length is zero, return the empty string;
 * @description: Checking this use new Array() and [];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.5_A1.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.5_Array_prototype_join\S15.4.4.5_A1.1_T1.js",

assertion: "If length is zero, return the empty string",

description: "Checking this use new Array() and []",

test: function testcase() {
   //CHECK#1
var x = new Array();
if (x.join() !== "") {
  $ERROR('#1: x = new Array(); x.join() === "". Actual: ' + (x.join()));
}  

//CHECK#2
x = [];
x[0] = 1;
x.length = 0;
if (x.join() !== "") {
  $ERROR('#2: x = []; x[0] = 1; x.length = 0; x.join() === "". Actual: ' + (x.join()));
}  

 }
});

