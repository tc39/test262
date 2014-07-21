// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If x is NaN, operator -x returns NaN
description: Checking NaN
---*/

//CHECK#1
if (isNaN(-NaN) !== true) {
  $ERROR('#1: -NaN === Not-a-Number. Actual: ' + (-NaN));
}

//CHECK#2
var x = NaN; 
if (isNaN(-x) != true) {
  $ERROR('#2: var x = NaN; -x === Not-a-Number. Actual: ' + (-x));
}
