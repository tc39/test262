// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "\"This\" operator only evaluates Expression"
description: Applying grouping operator to Number
---*/

//Check for Number

//CHECK#1
if ((1) !== 1) {
  $ERROR('#1: (1) === 1. Actual: ' + ((1)));
}

//CHECK#2
var x = new Number(1);
if ((x) !== x) {
  $ERROR('#2: var x = new Number(1); (x) === x. Actual: ' + ((x)));
}
