// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.1.1_A2_T1;
* @section: 15.2.1.1;
* @assertion: When the Object function is called with one argument value,
* and the value neither is null nor undefined, and is supplied, return ToObject(value);
* @description: Calling Object function with boolean argument value;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.1.1_A2_T1",

path: "15_Native\15.2_Object_Objects\15.2.1_The_Object_Constructor_Called_as_a_Function\S15.2.1.1_A2_T1.js",

assertion: "When the Object function is called with one argument value,",

description: "Calling Object function with boolean argument value",

test: function testcase() {
   var bool = true;

if(typeof bool !== 'boolean'){
  $FAIL('#1: bool should be boolean primitive');
}

var obj = Object(bool);

if (obj.constructor !== Boolean) {
  $ERROR('#2: Object(true) returns ToObject(true)');
}

if (typeof obj !== "object") {
  $ERROR('#3: Object(true) returns ToObject(true)');
}

if (!obj) {
  $ERROR('#4: Object(true) returns ToObject(true)');
}

if (obj === true) {
  $ERROR('#5: Object(true) returns ToObject(true)');
}

 }
});

