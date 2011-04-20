// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A1.1_T1;
 * @section: 15.4.2.2;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Create new property of Array.prototype. When new Array object has this property; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A1.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.2_The_Array_Constructor\15.4.2.2_new_Array_len\S15.4.2.2_A1.1_T1.js",

assertion: "The [[Prototype]] property of the newly constructed object",

description: "Create new property of Array.prototype. When new Array object has this property",

test: function testcase() {
   //CHECK#1
Array.prototype.myproperty = 1;
var x = new Array(0); 
if (x.myproperty !== 1) {
  $ERROR('#1: Array.prototype.myproperty = 1; var x = new Array(0); x.myproperty === 1. Actual: ' + (x.myproperty));
}

 }
});

