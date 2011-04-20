// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.1_A2.2_T1;
 * @section: 15.4.5.1, 15.4;
 * @assertion: If ToUint32(P) is less than the value of 
 * the length property of A, then return;
 * @description: length === 100, P in [0, 98, 99];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.1_A2.2_T1",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.1_Put\S15.4.5.1_A2.2_T1.js",

assertion: "If ToUint32(P) is less than the value of",

description: "length === 100, P in [0, 98, 99]",

test: function testcase() {
   //CHECK#1
var x = Array(100);
x[0] = 1;
if (x.length !== 100) {  
  $ERROR('#1: x = Array(100); x[0] = 1; x.length === 100. Actual: ' + (x.length));    
}

//CHECK#2
x[98] = 1;
if (x.length !== 100) {  
  $ERROR('#2: x = Array(100); x[0] = 1; x[98] = 1; x.length === 100. Actual: ' + (x.length));    
}

//CHECK#3
x[99] = 1;
if (x.length !== 100) {  
  $ERROR('#3: x = Array(100); x[0] = 1; x[98] = 1; x[99] = 1; x.length === 100. Actual: ' + (x.length));    
}

 }
});

