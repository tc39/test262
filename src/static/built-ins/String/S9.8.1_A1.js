// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If m is NaN, return the string "NaN"
es5id: 9.8.1_A1
description: NaN convert to String by explicit transformation
---*/

// CHECK#1
if (String(NaN) !== "NaN") {
  $ERROR('#1: String(NaN) === Not-a-Number Actual: ' + (String(NaN)));
}

// CHECK#2
if (String(Number.NaN) !== "NaN") {
  $ERROR('#2: String(Number.NaN) === Not-a-Number Actual: ' + (String(Number.NaN)));
}

// CHECK#3
if (String(Number("asasa")) !== "NaN") {
  $ERROR('#3: String(Number("asasa")) === Not-a-Number Actual: ' + (String(Number("asasa"))));
}
