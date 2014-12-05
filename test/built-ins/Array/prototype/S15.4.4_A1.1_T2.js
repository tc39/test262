// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4_A1.1_T2
description: >
    The Array prototype object is itself not an array; its [[Class]]
    is "Object",
---*/

//CHECK#1
if (Object.prototype.toString.call(Array.prototype) !== "[object Object]") {
  $ERROR('The Array prototype object is itself not an array; its' +
         '[[Class]] is "Object".');
}
