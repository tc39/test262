// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A8_T5;
 * @section: 11.9.5, 11.9.6;
 * @assertion: If Type(x) is different from Type(y), return true;   
 * @description: Checking such x and y that either x or y is primitive string and the other is primitive number; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A8_T5",

path: "11_Expressions\11.9_Equality_Operators\11.9.5_The_Strict_Does_not_equals_Operator\S11.9.5_A8_T5.js",

assertion: "If Type(x) is different from Type(y), return true",

description: "Checking such x and y that either x or y is primitive string and the other is primitive number",

test: function testcase() {
   //CHECK#1
try {
  throw 1;
} catch(e) {
  if (!(e !== "1")) {
    $ERROR('#1: throw 1 !== "1"');
  }
}

//CHECK#2
try {
  throw "1";
} catch(e) {
  if (!(1 !== e)) {
    $ERROR('#2: 1 !== throw "1"');
  }
} 

 }
});

