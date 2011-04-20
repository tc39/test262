// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.8_A2_T1;
 * @section: 9.8;
 * @assertion: Result of ToString conversion from null value is "null";
 * @description: null convert to String by explicit transformation;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.8_A2_T1",

path: "09_Type_Conversion\9.8_ToString\S9.8_A2_T1.js",

assertion: "Result of ToString conversion from null value is \"null\"",

description: "null convert to String by explicit transformation",

test: function testcase() {
   // CHECK#1
if (String(null) !== "null") {
  $ERROR('#1: String(null) === "null". Actual: ' + (String(null))); 
} 

 }
});

