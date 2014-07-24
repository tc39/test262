// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of isNaN has the attribute ReadOnly
es5id: 15.1.2.4_A2.3
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
x = isNaN.length;
isNaN.length = Infinity;
if (isNaN.length !== x) {
  $ERROR('#1: x = isNaN.length; isNaN.length = Infinity; isNaN.length === x. Actual: ' + (isNaN.length));
}
