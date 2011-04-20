// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.1_A1.1_T1;
 * @section: 15.4.1, 15.2.4.5;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Create new property of Array.prototype. When new Array object has this property; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.1_A1.1_T1",

path: "15_Native\15.4_Array_Objects\15.4.1_The_Array_Constructor_Called_as_a_Function\S15.4.1_A1.1_T1.js",

assertion: "The [[Prototype]] property of the newly constructed object",

description: "Create new property of Array.prototype. When new Array object has this property",

test: function testcase() {
   //CHECK#1
Array.prototype.myproperty = 1;
var x = Array(); 
if (x.myproperty !== 1) {
  $ERROR('#1: Array.prototype.myproperty = 1; var x = Array(); x.myproperty === 1. Actual: ' + (x.myproperty));
}

//CHECK#2
if (x.hasOwnProperty('myproperty') !== false) {
  $ERROR('#2: Array.prototype.myproperty = 1; var x = Array(); x.hasOwnProperty(\'myproperty\') === false. Actual: ' + (x.hasOwnProperty('myproperty')));
}

 }
});

