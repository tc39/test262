// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4_A2.1_T2;
 * @section: 15.4.4;
 * @assertion: The Array prototype object does not have a valueOf property of 
 * its own; however, it inherits the valueOf property from the valueOf 
 * property from the Object prototype Object;
 * @description: Change valueOf property of Object.prototype. When Array.prototype.valueOf also change; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4_A2.1_T2",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\S15.4.4_A2.1_T2.js",

assertion: "The Array prototype object does not have a valueOf property of",

description: "Change valueOf property of Object.prototype. When Array.prototype.valueOf also change",

test: function testcase() {
   Object.prototype.valueOf = 1;

//CHECK#1
if (Array.prototype.valueOf !== 1) {
  $ERROR('#1: Object.prototype.valueOf = 1; Array.prototype.valueOf === 1. Actual: ' + (Array.prototype.valueOf));
}

//CHECK#2
var x = new Array();
if (x.valueOf !== 1) {
  $ERROR('#1: Object.prototype.valueOf = 1; x = new Array(); x.valueOf === 1. Actual: ' + (x.valueOf));
}

 }
});

