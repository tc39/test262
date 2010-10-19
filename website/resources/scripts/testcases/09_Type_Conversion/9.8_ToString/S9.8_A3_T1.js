// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8_A3_T1;
 * @section: 9.8;
 * @assertion: Result of ToString conversion from boolean value is "true" if 
 * the argument is "true", else is "false";
 * @description: True and false convert to String by explicit transformation;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8_A3_T1",

path: "9.8",

description: "True and false convert to String by explicit transformation",

test: function testcase() {
   // CHECK#1
if (String(false) !== "false") {
  $ERROR('#1: String(false) === "false". Actual: ' + (String(false)));
}

// CHECK#2
if (String(true) !== "true") {
  $ERROR('#2: String(true) === "true". Actual: ' + (String(true)));	
}

 }
});

