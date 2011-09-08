// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The production x %= y is the same as x = x % y
 *
 * @section: 11.13.2, 11.5.3;
 * @path: 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A4.3_T1.1.js;
 * @description: Type(x) and Type(y) vary between primitive boolean and Boolean object;
 */

//CHECK#1
x = true;
x %= true;
if (x !== 0) {
  $ERROR('#1: x = true; x %= true; x === 0. Actual: ' + (x));
}

//CHECK#2
x = new Boolean(true);
x %= true;
if (x !== 0) {
  $ERROR('#2: x = new Boolean(true); x %= true; x === 0. Actual: ' + (x));
}

//CHECK#3
x = true;
x %= new Boolean(true);
if (x !== 0) {
  $ERROR('#3: x = true; x %= new Boolean(true); x === 0. Actual: ' + (x));
}

//CHECK#4
x = new Boolean(true);
x %= new Boolean(true);
if (x !== 0) {
  $ERROR('#4: x = new Boolean(true); x %= new Boolean(true); x === 0. Actual: ' + (x));
}

