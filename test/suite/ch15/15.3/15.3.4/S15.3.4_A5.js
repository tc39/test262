// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Function prototype object is itself a Function object without
    [[create]] property
es5id: 15.3.4_A5
description: Checking if creating "new Function.prototype object" fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

//CHECK#
try {
  var obj = new Function.prototype;
  $FAIL('#1: The Function prototype object is itself a Function object without [[create]] property: '+e);
} catch (e) {
  $PRINT("#1.1: The Function prototype object is itself a Function object without [[create]] property "+e);

}
