// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A2.1_T1;
 * @section: 15.4.2.2;
 * @assertion: If the argument len is a Number and ToUint32(len) is equal to len, 
 * then the length property of the newly constructed object is set to ToUint32(len);
 * @description: Array constructor is given one argument;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A2.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.2_The_Array_Constructor\15.4.2.2_new_Array_len\S15.4.2.2_A2.1_T1.js",

assertion: "If the argument len is a Number and ToUint32(len) is equal to len,",

description: "Array constructor is given one argument",

test: function testcase() {
   //CHECK#1
var x = new Array(0); 
if (x.length !== 0) {
  $ERROR('#1: var x = new Array(0); x.length === 0. Actual: ' + (x.length));
}

//CHECK#2
var x = new Array(1); 
if (x.length !== 1) {
  $ERROR('#2: var x = new Array(1); x.length === 1. Actual: ' + (x.length));
}   

//CHECK#3
var x = new Array(4294967295); 
if (x.length !== 4294967295) {
  $ERROR('#3: var x = new Array(4294967295); x.length === 4294967295. Actual: ' + (x.length));
} 

 }
});

