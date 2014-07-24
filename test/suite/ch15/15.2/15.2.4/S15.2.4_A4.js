// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    Since the Object prototype object is not a function, it has not
    [[create]] method
es5id: 15.2.4_A4
description: Checking if creating "new Object.prototype" fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

//CHECK#1
try {
  instance = new Object.prototype;
  $FAIL('#1: Since Object prototype object is not function it has not [[create]] method');
} catch (e) {
  $PRINT(e);
}
