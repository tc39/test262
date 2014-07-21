// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If Result(3).type is normal and its completion value is empty,
    then return the value undefined
description: Switch statement
---*/

//CHECK#1
if (eval("switch(1){}") !== undefined) {
  $ERROR('#1: eval("switch(1){}") === undefined. Actual: ' + (eval("switch(1){}")));
}
