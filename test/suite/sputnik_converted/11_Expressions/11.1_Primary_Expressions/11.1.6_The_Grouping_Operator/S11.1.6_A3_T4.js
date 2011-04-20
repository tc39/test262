// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.6_A3_T4;
* @section: 11.1.6;
* @assertion: "This" operator only evaluates Expression;
* @description: Applying grouping operator to undefined;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.6_A3_T4",

path: "11_Expressions\11.1_Primary_Expressions\11.1.6_The_Grouping_Operator\S11.1.6_A3_T4.js",

assertion: "\"This\" operator only evaluates Expression",

description: "Applying grouping operator to undefined",

test: function testcase() {
   //Check for undefined and null

//CHECK#1
if ((undefined) !== undefined) {
  $ERROR('#1: (undefined) === undefined. Actual: ' + ((undefined)));
}

//CHECK#2
if ((void 0) !== void 0) {
  $ERROR('#2: (void 0) === void 0. Actual: ' + ((void 0)));
}

//CHECK#2
if ((null) !== null) {
  $ERROR('#2: (null) === null. Actual: ' + ((null)));
}

 }
});

