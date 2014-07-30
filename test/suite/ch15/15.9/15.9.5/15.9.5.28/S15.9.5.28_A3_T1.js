// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setMilliseconds property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.28_A3_T1
description: Checking ReadOnly attribute
---*/

x = Date.prototype.setMilliseconds.length;
Date.prototype.setMilliseconds.length = 1;
if (Date.prototype.setMilliseconds.length !== x) {
  $ERROR('#1: The Date.prototype.setMilliseconds.length has the attribute ReadOnly');
}
