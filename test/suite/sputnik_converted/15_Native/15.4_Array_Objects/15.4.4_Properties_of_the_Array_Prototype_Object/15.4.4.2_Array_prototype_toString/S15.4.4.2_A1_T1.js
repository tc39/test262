// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.2_A1_T1;
 * @section: 15.4.4.2;
 * @assertion: The result of calling this function is the same as if 
 * the built-in join method were invoked for this object with no argument;
 * @description: If Result(2) is zero, return the empty string; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.2_A1_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.2_Array_prototype_toString\S15.4.4.2_A1_T1.js",

assertion: "The result of calling this function is the same as if",

description: "If Result(2) is zero, return the empty string",

test: function testcase() {
   //CHECK#1
var x = new Array();
if (x.toString() !== x.join()) {
  $ERROR('#1.1: x = new Array(); x.toString() === x.join(). Actual: ' + (x.toString()));
}  else {
  if (x.toString() !== "") {
    $ERROR('#1.2: x = new Array(); x.toString() === "". Actual: ' + (x.toString()));
  }  
}  

//CHECK#2
x = [];
x[0] = 1;
x.length = 0;
if (x.toString() !== x.join()) {
  $ERROR('#2.1: x = []; x[0] = 1; x.length = 0; x.toString() === x.join(). Actual: ' + (x.toString()));
} else {
  if (x.toString() !== "") {
    $ERROR('#2.2: x = []; x[0] = 1; x.length = 0; x.toString() === "". Actual: ' + (x.toString()));
  }  
}    

 }
});

