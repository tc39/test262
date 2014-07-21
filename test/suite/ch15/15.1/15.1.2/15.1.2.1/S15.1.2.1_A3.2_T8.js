// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
description: for statement
---*/

//CHECK#1
if (eval("for(false;false;false);") !== undefined) {
  $ERROR('#1: eval("for(false;false;false);") === undefined. Actual: ' + (eval("for(false;false;false);")));
}
