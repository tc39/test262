// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of decodeURI has the attribute ReadOnly
description: Checking if varying the length property fails
flags: [noStrict]
---*/

//CHECK#1
var x = decodeURI.length;
decodeURI.length = Infinity;
if (decodeURI.length !== x) {
  $ERROR('#1: x = decodeURI.length; decodeURI.length = Infinity; decodeURI.length === x. Actual: ' + (decodeURI.length));
}
