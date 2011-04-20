// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8_A3_T2;
 * @section: 9.8;
 * @assertion: Result of ToString conversion from boolean value is "true" if 
 * the argument is "true", else is "false";
 * @description: True and false convert to String by implicit transformation;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8_A3_T2",

path: "09_Type_Conversion\9.8_ToString\S9.8_A3_T2.js",

assertion: "Result of ToString conversion from boolean value is \"true\" if",

description: "True and false convert to String by implicit transformation",

test: function testcase() {
   // CHECK#1
if (false + "" !== "false") {
  $ERROR('#1: false + "" === "false". Actual: ' + (false + ""));
}

// CHECK#2
if (true + "" !== "true") {
  $ERROR('#2: true + "" === "true". Actual: ' + (true + ""));	
}

 }
});

