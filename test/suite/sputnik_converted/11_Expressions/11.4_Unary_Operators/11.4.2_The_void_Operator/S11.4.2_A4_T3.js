// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.2_A4_T3;
* @section: 11.4.2;
* @assertion: Operator "void" evaluates UnaryExpression and returns undefined;
* @description: Type(x) is string primitive of String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.2_A4_T3",

path: "11_Expressions\11.4_Unary_Operators\11.4.2_The_void_Operator\S11.4.2_A4_T3.js",

assertion: "Operator \"void\" evaluates UnaryExpression and returns undefined",

description: "Type(x) is string primitive of String object",

test: function testcase() {
   //CHECK#1
var x = "1";
if (void x !== undefined) {
  $ERROR('#1: var x = "1"; void x === undefined. Actual: ' + (void x));
}

//CHECK#2
var x = "x"; 
if (isNaN(void x) !== true) {
  $ERROR('#2: var x = "x"; void x === undefined. Actual: ' + (void x));
}

//CHECK#3
var x = new String("-1");
if (void x !== undefined) {
  $ERROR('#3: var x = new String("-1"); void x === undefined. Actual: ' + (void x));
}

 }
});

