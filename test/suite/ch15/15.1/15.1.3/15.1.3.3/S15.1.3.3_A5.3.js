// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of encodeURI has the attribute ReadOnly
es5id: 15.1.3.3_A5.3
description: Checking if varying the length property fails
---*/

//CHECK#1
x = encodeURI.length;
encodeURI.length = Infinity;
if (encodeURI.length !== x) {
  $ERROR('#1: x = encodeURI.length; encodeURI.length = Infinity; encodeURI.length === x. Actual: ' + (encodeURI.length));
}
