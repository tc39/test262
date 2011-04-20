// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.1_A1_T3;
 * @section: 9.1;
 * @assertion: Result of primitive conversion from object is a default value for the Object;
 * @description: Using operator "+". This operator firstly calls ToPrimitive and then calls ToString or ToNumber;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.1_A1_T3",

path: "09_Type_Conversion\9.1_ToPrimitive\S9.1_A1_T3.js",

assertion: "Result of primitive conversion from object is a default value for the Object",

description: "Using operator \"+\". This operator firstly calls ToPrimitive and then calls ToString or ToNumber",

test: function testcase() {
   // CHECK#1
var object = {valueOf: function() {return 1}, toString: function() {return 0}};
if (object + "" !== "1") {
  $ERROR('#1: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; object + "" === "1". Actual: ' + (object + ""));
}

// CHECK#2
var object = {valueOf: function() {return "1"}, toString: function() {return 0}};
if (object + 0 !== "10") {
  $ERROR('#2: var object = {valueOf: function() {return "1"}, toString: function() {return 0}}; object + 0 === "10". Actual: ' + (object + 0));
}


 }
});

