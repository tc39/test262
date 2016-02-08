// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x / y returns ToNumber(x) / ToNumber(y)
es5id: 11.5.2_A3_T1.4
description: Type(x) and Type(y) vary between Null and Undefined
---*/

//CHECK#1
if (isNaN(null / undefined) !== true) {
  $ERROR('#1: null / undefined === Not-a-Number. Actual: ' + (null / undefined));
}

//CHECK#2
if (isNaN(undefined / null) !== true) {
  $ERROR('#2: undefined / null === Not-a-Number. Actual: ' + (undefined / null));
}

//CHECK#3
if (isNaN(undefined / undefined) !== true) {
  $ERROR('#3: undefined / undefined === Not-a-Number. Actual: ' + (undefined / undefined));
}

//CHECK#4
if (isNaN(null / null) !== true) {
  $ERROR('#4: null / null === Not-a-Number. Actual: ' + (null / null));
}
