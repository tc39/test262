// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.1_A3;
* @section: 8.6.2.1;
* @assertion: When the [[Get]] method of O is called with property name P value of P returns;
* @description: Try to get P property P exist in instance; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.1_A3",

path: "08_Types\8.6_The_Object_Type\8.6.2_Internal_Properties_and_Methods\S8.6.2.1_A3.js",

assertion: "When the [[Get]] method of O is called with property name P value of P returns",

description: "Try to get P property P exist in instance",

test: function testcase() {
   var __map={shape:"cube", 5:"five", "6":"six"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__map.shape !== "cube"){
  $ERROR('#1: var __map={shape:"cube", 5:"five", "6":"six"}; __map.shape === "cube". Actual: ' + (__map.shape));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__map["shape"] !== "cube"){
  $ERROR('#2: var __map={shape:"cube", 5:"five", "6":"six"}; __map["shape"] === "cube". Actual: ' + (__map["shape"]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__map["5"] !== "five"){
  $ERROR('#3: var __map={shape:"cube", 5:"five", "6":"six"}; __map["5"] === "five". Actual: ' + (__map["5"]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__map[5] !== "five"){
  $ERROR('#4: var __map={shape:"cube", 5:"five", "6":"six"}; __map[5] === "five". Actual: ' + (__map[5]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__map["6"] !== "six"){
  $ERROR('#5: var __map={shape:"cube", 5:"five", "6":"six"}; __map["6"] === "six". Actual: ' + (__map["6"]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__map[6] !== "six"){
  $ERROR('#6: var __map={shape:"cube", 5:"five", "6":"six"}; __map[6] === "six". Actual: ' + (__map[6]));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

