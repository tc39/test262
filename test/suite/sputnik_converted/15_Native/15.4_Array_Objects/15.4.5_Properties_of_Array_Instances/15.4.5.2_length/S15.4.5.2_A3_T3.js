// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.2_A3_T3;
 * @section: 15.4.5.2, 15.4.2.2;
 * @assertion: If the length property is changed, every property whose name 
 * is an array index whose value is not smaller than the new length is automatically deleted;
 * @description: [[Put]] (length, 4294967296);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.2_A3_T3",

path: "15_Native\15.4_Array_Objects\15.4.5_Properties_of_Array_Instances\15.4.5.2_length\S15.4.5.2_A3_T3.js",

assertion: "If the length property is changed, every property whose name",

description: "[[Put]] (length, 4294967296)",

test: function testcase() {
   //CHECK#1
var x = [];
x.length = 4294967295;
if (x.length !== 4294967295) {  
  $ERROR('#1: x = []; x.length = 4294967295; x.length === 4294967295');    
}

//CHECK#2
try {
  x = [];
  x.length = 4294967296;
  $ERROR('#2.1: x = []; x.length = 4294967296 throw RangeError. Actual: x.length === ' + (x.length));
} catch(e) {    
  if ((e instanceof RangeError) !== true) {
    $ERROR('#2.2: x = []; x.length = 4294967296 throw RangeError. Actual: ' + (e));
  }    
}

 }
});

