// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.4_T1.3;
 * @section: 11.13.2, 11.6.1;
 * @assertion: The production x += y is the same as x = x + y; 
 * @description: Type(x) and Type(y) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.4_T1.3",

path: "11_Expressions\11.13_Assignment_Operators\11.13.2_Compound_Assignment\S11.13.2_A4.4_T1.3.js",

assertion: "The production x += y is the same as x = x + y",

description: "Type(x) and Type(y) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
x = null;
x += undefined;
if (isNaN(x) !== true) {
  $ERROR('#1: x = null; x += undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x += null;
if (isNaN(x) !== true) {
  $ERROR('#2: x = undefined; x += null; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#3
x = undefined;
x += undefined;
if (isNaN(x) !== true) {
  $ERROR('#3: x = undefined; x += undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#4
x = null;
x += null;
if (x !== 0) {
  $ERROR('#4: x = null; x += null; x === 0. Actual: ' + (x));
}

 }
});

