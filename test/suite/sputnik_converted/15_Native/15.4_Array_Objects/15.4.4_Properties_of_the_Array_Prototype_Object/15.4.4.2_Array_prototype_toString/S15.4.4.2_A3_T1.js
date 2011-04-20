// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.2_A3_T1;
 * @section: 15.4.4.2, 8.6.2.1;
 * @assertion: [[Get]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.2_A3_T1",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.2_Array_prototype_toString\S15.4.4.2_A3_T1.js",

assertion: "[[Get]] from not an inherited property",

description: "[[Prototype]] of Array instance is Array.prototype",

test: function testcase() {
   //CHECK#1
Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.toString() !== "0,1") {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; x.toString() === "0,1". Actual: ' + (x.toString()));    
}

 }
});

