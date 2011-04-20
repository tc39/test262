// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.8_A5.2;
* @section: 15.4.4.8, 15.2.4.5, 11.4.1;
* @assertion: The length property of reverse has the attribute DontDelete;
* @description: Checking use hasOwnProperty, delete;
* @strict_mode_negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.8_A5.2",

path: "15_Native\15.4_Array_Objects\15.4.4_Properties_of_the_Array_Prototype_Object\15.4.4.8_Array_prototype_reverse\S15.4.4.8_A5.2.js",

assertion: "The length property of reverse has the attribute DontDelete",

description: "Checking use hasOwnProperty, delete",

test: function testcase() {
   //CHECK#1
if (Array.prototype.reverse.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.reverse.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.reverse.hasOwnProperty('length')));
}

delete Array.prototype.reverse.length;

//CHECK#2
if (Array.prototype.reverse.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.reverse.length; Array.prototype.reverse.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.reverse.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.reverse.length === undefined) {
  $ERROR('#3: delete Array.prototype.reverse.length; Array.prototype.reverse.length !== undefined');
}



 }
});

