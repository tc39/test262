// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.2.1_A5_T2;
* @section: 15.2.2.1, 8.6;
* @assertion: When the Object constructor is called with one argument value and 
* the type of value is Number, return ToObject(number);
* @description: Argument value is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.2.1_A5_T2",

path: "15_Native\15.2_Object_Objects\15.2.2_The_Object_Constructor\S15.2.2.1_A5_T2.js",

assertion: "When the Object constructor is called with one argument value and",

description: "Argument value is NaN",

test: function testcase() {
   var num = NaN;

//CHECK#1
if (typeof num  !== 'number') {
  $FAIL('#1: NaN is NOT a number');
}

var n_obj = new Object(num);

//CHECK#2
if (n_obj.constructor !== Number) {
  $ERROR('#2: When the Object constructor is called with Number argument return ToObject(number)');
}

//CHECK#3
if (typeof n_obj !== 'object') {
  $ERROR('#3: When the Object constructor is called with Number argument return ToObject(number)');
}

 }
});

