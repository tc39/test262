// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x >>>= y is the same as x = x >>> y
es5id: 11.13.2_A4.8_T2.3
description: >
    Type(x) is different from Type(y) and both types vary between
    Number (primitive or object) and Null
---*/

var x;

//CHECK#1
x = 1;
x >>>= null;
if (x !== 1) {
  $ERROR('#1: x = 1; x >>>= null; x === 1. Actual: ' + (x));
}

//CHECK#2
x = null;
x >>>= 1;
if (x !== 0) {
  $ERROR('#2: x = null; x >>>= 1; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Number(1);
x >>>= null;
if (x !== 1) {
  $ERROR('#3: x = new Number(1); x >>>= null; x === 1. Actual: ' + (x));
}

//CHECK#4
x = null;
x >>>= new Number(1);
if (x !== 0) {
  $ERROR('#4: x = null; x >>>= new Number(1); x === 0. Actual: ' + (x));
}
