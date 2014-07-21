// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The activation object is initialised with a property with name arguments
    and attributes {DontDelete}
description: Checking if deleting function parameter is possible
flags: [noStrict]
---*/

//CHECK#1
function f1(a){
  delete a;
  return a;
}
if (f1(1) !== 1)
  $ERROR('#1: Function parameter was deleted');
