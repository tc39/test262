// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.1_A2.3_T1;
 * @section: 15.4.5.1, 15.4;
 * @assertion: If ToUint32(P) is less than the value of 
 * the length property of A, change (or set) length to ToUint32(P)+1;
 * @description: length = 100, P in [100, 199];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.1_A2.3_T1",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.1_Put\S15.4.5.1_A2.3_T1.js",

assertion: "If ToUint32(P) is less than the value of",

description: "length = 100, P in [100, 199]",

test: function testcase() {
   //CHECK#1
var x = Array(100);
x[100] = 1;
if (x.length !== 101) {  
  $ERROR('#1: x = Array(100); x[100] = 1; x.length === 101. Actual: ' + (x.length));    
}

//CHECK#2
x[199] = 1;
if (x.length !== 200) {  
  $ERROR('#2: x = Array(100); x[100] = 1; x[199] = 1; x.length === 100. Actual: ' + (x.length));    
}

 }
});

