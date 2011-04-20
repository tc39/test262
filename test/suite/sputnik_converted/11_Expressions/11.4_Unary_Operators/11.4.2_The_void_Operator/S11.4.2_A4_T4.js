// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.2_A4_T4;
* @section: 11.4.2;
* @assertion: Operator "void" evaluates UnaryExpression and returns undefined;
* @description: Type(x) is undefined or null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.2_A4_T4",

path: "11_Expressions\11.4_Unary_Operators\11.4.2_The_void_Operator\S11.4.2_A4_T4.js",

assertion: "Operator \"void\" evaluates UnaryExpression and returns undefined",

description: "Type(x) is undefined or null",

test: function testcase() {
   //CHECK#1
var x; 
if (isNaN(void x) !== true) {
  $ERROR('#1: var x; void x === undefined. Actual: ' + (void x));
}

//CHECK#2
var x = null;
if (void x !== undefined) {
  $ERROR('#2: var x = null; void x === undefined. Actual: ' + (void x));
}

 }
});

