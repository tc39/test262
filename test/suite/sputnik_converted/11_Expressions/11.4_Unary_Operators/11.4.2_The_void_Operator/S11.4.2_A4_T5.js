// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.2_A4_T5;
* @section: 11.4.2;
* @assertion: Operator "void" evaluates UnaryExpression and returns undefined;
* @description: Type(x) is Object object or Function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.2_A4_T5",

path: "11_Expressions\11.4_Unary_Operators\11.4.2_The_void_Operator\S11.4.2_A4_T5.js",

assertion: "Operator \"void\" evaluates UnaryExpression and returns undefined",

description: "Type(x) is Object object or Function object",

test: function testcase() {
   //CHECK#1
var x = {}; 
if (isNaN(void x) !== true) {
  $ERROR('#1: var x = {}; void x === undefined. Actual: ' + (void x));
}

//CHECK#2
var x = function(){return 1}; 
if (isNaN(void x) !== true) {
  $ERROR('#2: var x = function(){return 1}; void x === undefined. Actual: ' + (void x));
}

 }
});

