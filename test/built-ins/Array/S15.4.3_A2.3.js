// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of Array has the attribute ReadOnly
es5id: 15.4.3_A2.3
description: Checking if varying the length property fails
---*/

//CHECK#1
x = Array.length;
Array.length = Infinity;
if (Array.length !== x) {
  $ERROR('#1: x = Array.length; Array.length = Infinity; Array.length === x. Actual: ' + (Array.length));
}
