// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.1_A1_T4;
 * @section: 9.1;
 * @assertion: Result of primitive conversion from object is a default value for the Object;
 * @description: Using operator "<". The operator firstly calls ToPrimitive and then calls ToString or ToNumber;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.1_A1_T4",

path: "09_Type_Conversion\9.1_ToPrimitive\S9.1_A1_T4.js",

assertion: "Result of primitive conversion from object is a default value for the Object",

description: "Using operator \"<\". The operator firstly calls ToPrimitive and then calls ToString or ToNumber",

test: function testcase() {
   // CHECK#1
var object = {valueOf: function() {return -2}, toString: function() {return "-2"}};
if ("-1" < object) {
  $ERROR('#1: var object = {valueOf: function() {return -2}, toString: function() {return "-2"}}; "-1" < object');
}

// CHECK#2
var object = {valueOf: function() {return "-2"}, toString: function() {return -2}};
if (object < "-1") {
  $ERROR('#2: var object = {valueOf: function() {return "-2"}, toString: function() {return -2}}; object < "-1"');
}


 }
});

