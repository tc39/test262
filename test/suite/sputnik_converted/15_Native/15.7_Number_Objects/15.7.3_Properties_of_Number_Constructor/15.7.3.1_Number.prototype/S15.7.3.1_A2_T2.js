// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.1_A2_T2;
 * @section: 15.7.3.1;
 * @assertion: Number.prototype is itself Number object;
 * @description: Checking type of Number.prototype property - test based on 
 * overwriting of Number.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.1_A2_T2",

path: "15_Native\15.7_Number_Objects\15.7.3_Properties_of_Number_Constructor\15.7.3.1_Number.prototype\S15.7.3.1_A2_T2.js",

assertion: "Number.prototype is itself Number object",

description: "Checking type of Number.prototype property - test based on",

test: function testcase() {
   //CHECK#1
if (typeof Number.prototype !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

Number.prototype.toString = Object.prototype.toString;

if (Number.prototype.toString() !== "[object Number]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Number"');
}

 }
});

