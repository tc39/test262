// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.6_T1.4;
 * @section: 11.13.2, 11.7.1;
 * @assertion: The production x <<= y is the same as x = x << y;
 * @description: Type(x) and Type(y) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.6_T1.4",

path: "11_Expressions\11.13_Assignment_Operators\11.13.2_Compound_Assignment\S11.13.2_A4.6_T1.4.js",

assertion: "The production x <<= y is the same as x = x << y",

description: "Type(x) and Type(y) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
x = null;
x <<= undefined;
if (x !== 0) {
  $ERROR('#1: x = null; x <<= undefined; x === 0. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x <<= null;
if (x !== 0) {
  $ERROR('#2: x = undefined; x <<= null; x === 0. Actual: ' + (x));
}

//CHECK#3
x = undefined;
x <<= undefined;
if (x !== 0) {
  $ERROR('#3: x = undefined; x <<= undefined; x === 0. Actual: ' + (x));
}

//CHECK#4
x = null;
x <<= null;
if (x !== 0) {
  $ERROR('#4: x = null; x <<= null; x === 0. Actual: ' + (x));
}

 }
});

