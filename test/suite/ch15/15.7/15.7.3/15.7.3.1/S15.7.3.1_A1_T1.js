// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Number property "prototype" has { DontEnum, DontDelete, ReadOnly }
    attributes
es5id: 15.7.3.1_A1_T1
description: Checking if varying the Number.prototype property fails
---*/

//CHECK#1
var x = Number.prototype;
Number.prototype = 1;
if (Number.prototype !== x) {
  $ERROR('#1: The Number.prototype property has the attributes ReadOnly');
}
