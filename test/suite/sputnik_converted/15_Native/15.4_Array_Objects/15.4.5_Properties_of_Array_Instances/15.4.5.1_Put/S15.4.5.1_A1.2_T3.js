// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.1_A1.2_T3;
 * @section: 15.4.5.1, 15.4, 15.2.4.5;
 * @assertion: For every integer k that is less than the value of 
 * the length property of A but not less than ToUint32(length), 
 * if A itself has a property (not an inherited property) named ToString(k), 
 * then delete that property;
 * @description: Checking an inherited property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.1_A1.2_T3",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.1_Put\S15.4.5.1_A1.2_T3.js",

assertion: "For every integer k that is less than the value of",

description: "Checking an inherited property",

test: function testcase() {
   //CHECK#1
Array.prototype[2] = 2;
var x = [0,1];
x.length = 3;
if (x.hasOwnProperty('2') !== false) {  
  $ERROR('#1: Array.prototype[2] = 2; x = [0,1]; x.length = 3; x.hasOwnProperty(\'2\') === false. Actual: ' + (x.hasOwnProperty('2')));    
}

//CHECK#2
x.length = 2;
if (x[2] !== 2) {  
  $ERROR('#2: Array.prototype[2] = 2; x = [0,1]; x.length = 3; x.length = 2; x[2] === 2. Actual: ' + (x[2]));    
}

 }
});

