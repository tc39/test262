// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.1.1_A2_T14;
* @section: 15.2.1.1;
* @assertion: When the Object function is called with one argument value,
* and the value neither is null nor undefined, and is supplied, return ToObject(value);
* @description: Calling Object function with sum of empty string and a number as argument value;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.1.1_A2_T14",

path: "15_Native\15.2_Object_Objects\15.2.1_The_Object_Constructor_Called_as_a_Function\S15.2.1.1_A2_T14.js",

assertion: "When the Object function is called with one argument value,",

description: "Calling Object function with sum of empty string and a number as argument value",

test: function testcase() {
   var obj = Object(""+1);

//CHECK#2
if (obj.constructor !== String) {
  $ERROR('#2: Object(expression) returns ToObject(expression)');
}

//CHECK#3
if (typeof obj !== "object") {
  $ERROR('#3: Object(expression) returns ToObject(expression)');
}

//CHECK#4
if ((obj != "1")||(obj === "1")) {
  $ERROR('#4: Object(expression) returns ToObject(expression)');
}

 }
});

