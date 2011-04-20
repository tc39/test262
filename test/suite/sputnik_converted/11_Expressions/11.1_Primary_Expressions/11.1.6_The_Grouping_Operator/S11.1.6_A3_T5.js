// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.6_A3_T5;
* @section: 11.1.6;
* @assertion: "This" operator only evaluates Expression;
* @description: Using grouping operator in declaration of variables;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.6_A3_T5",

path: "11_Expressions\11.1_Primary_Expressions\11.1.6_The_Grouping_Operator\S11.1.6_A3_T5.js",

assertion: "\"This\" operator only evaluates Expression",

description: "Using grouping operator in declaration of variables",

test: function testcase() {
   //CHECK#1
(x) = 1;
if (x !== 1) {
  $ERROR('#1: (x) = 1; x === 1. Actual: ' + (x));
}

//CHECK#2
var y = 1; (y)++; ++(y); (y)--; --(y);
if (y !== 1) {
  $ERROR('#2: var y = 1; (y)++; ++(y); (y)--; --(y); y === 1. Actual: ' + (y));
}

 }
});

