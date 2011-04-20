// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.4_A4_T5;
* @section: 11.4.4, 11.6.3;
* @assertion: Operator ++x returns ToNumber(x) + 1;
* @description: Type(x) is Object object or Function object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.4_A4_T5",

path: "11_Expressions\11.4_Unary_Operators\11.4.4_Prefix_Increment_Operator\S11.4.4_A4_T5.js",

assertion: "Operator ++x returns ToNumber(x) + 1",

description: "Type(x) is Object object or Function object",

test: function testcase() {
   //CHECK#1
var x = {}; 
if (isNaN(++x) !== true) {
  $ERROR('#1: var x = {}; ++x === Not-a-Number. Actual: ' + (++x));
}

//CHECK#2
var x = function(){return 1}; 
if (isNaN(++x) !== true) {
  $ERROR('#2: var x = function(){return 1}; ++x === Not-a-Number. Actual: ' + (++x));
}

 }
});

