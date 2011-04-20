// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.2_A3_T1.5;
 * @section: 11.6.2;
 * @assertion: Operator x - y returns ToNumber(x) - ToNumber(y); 
 * @description: Type(x) and Type(y) vary between Object object and Function object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A3_T1.5",

path: "11_Expressions\11.6_Additive_Operators\11.6.2_The_Subtraction_operator\S11.6.2_A3_T1.5.js",

assertion: "Operator x - y returns ToNumber(x) - ToNumber(y)",

description: "Type(x) and Type(y) vary between Object object and Function object",

test: function testcase() {
   //CHECK#1
if (isNaN({} - function(){return 1}) !== true) {
  $ERROR('#1: {} - function(){return 1} === Not-a-Number. Actual: ' + ({} - function(){return 1}));
}

//CHECK#2
if (isNaN(function(){return 1} - {}) !== true) {
  $ERROR('#2: function(){return 1} - {} === Not-a-Number. Actual: ' + (function(){return 1} - {}));
}

//CHECK#3
if (isNaN(function(){return 1} - function(){return 1}) !== true) {
  $ERROR('#3: function(){return 1} - function(){return 1} === Not-a-Number. Actual: ' + (function(){return 1} - function(){return 1}));
}

//CHECK#4
if (isNaN({} - {}) !== true) {
  $ERROR('#4: {} - {} === Not-a-Number. Actual: ' + ({} - {}));
}

 }
});

