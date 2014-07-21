// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Prefix Decrement Operator for automatic semicolon insertion
description: Try use Variable1 \n --Variable2 construction
---*/

//CHECK#1
var x = 1;
var y = 1;
x
--y
if (x !== 1) {
  $ERROR('#1: Check Prefix Decrement Operator for automatic semicolon insertion');
} else {
  if (y !== 0) {
    $ERROR('#1: Check Prefix Decrement Operator for automatic semicolon insertion');
  }
}
