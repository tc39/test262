// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.1.1_A2_T8;
* @section: 15.2.1.1;
* @assertion: When the Object function is called with one argument value,
* and the value neither is null nor undefined, and is supplied, return ToObject(value);
* @description: Calling Object function with function variable argument value;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.1.1_A2_T8",

path: "15_Native\15.2_Object_Objects\15.2.1_The_Object_Constructor_Called_as_a_Function\S15.2.1.1_A2_T8.js",

assertion: "When the Object function is called with one argument value,",

description: "Calling Object function with function variable argument value",

test: function testcase() {
   var func = function(){return 1;};

//CHECK#1
if (typeof func !== 'function') {
  $ERROR('#1: func = function(){return 1;} is NOT an function');
}

var n_obj = Object(func);

//CHECK#2
if ((n_obj !== func)||(n_obj()!==1)) {
  $ERROR('#2: Object(function) returns function');
}


 }
});

