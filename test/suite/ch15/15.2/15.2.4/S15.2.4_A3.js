// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since the Object prototype object is not a function, it has not [[call]]
    method
es5id: 15.2.4_A3
description: Checking if calling Object prototype as a function fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

//CHECK#1
try {
  Object.prototype();
  $FAIL('#1: Since Object prototype object is not function it has not [[call]] method');
} catch (e) {
  $PRINT(e);
}
