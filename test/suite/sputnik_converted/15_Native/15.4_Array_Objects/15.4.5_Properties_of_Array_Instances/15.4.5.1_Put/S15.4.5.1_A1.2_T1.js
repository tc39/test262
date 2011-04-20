// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.1_A1.2_T1;
 * @section: 15.4.5.1, 15.4;
 * @assertion: For every integer k that is less than the value of 
 * the length property of A but not less than ToUint32(length), 
 * if A itself has a property (not an inherited property) named ToString(k), 
 * then delete that property;
 * @description: Change length of array; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.1_A1.2_T1",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.1_Put\S15.4.5.1_A1.2_T1.js",

assertion: "For every integer k that is less than the value of",

description: "Change length of array",

test: function testcase() {
   //CHECK#1
var x = [0,,2,,4];
x.length = 4;
if (x[4] !== undefined) {  
  $ERROR('#1: x = [0,,2,,4]; x.length = 4; x[4] === undefined. Actual: ' + (x[4]));    
}

//CHECK#2
x.length = 3;
if (x[3] !== undefined) {  
  $ERROR('#2: x = [0,,2,,4]; x.length = 4; x.length = 3; x[3] === undefined. Actual: ' + (x[3]));    
}

//CHECK#3
if (x[2] !== 2) {  
  $ERROR('#3: x = [0,,2,,4]; x.length = 4; x.length = 3; x[2] === 2. Actual: ' + (x[2]));    
}

 }
});

