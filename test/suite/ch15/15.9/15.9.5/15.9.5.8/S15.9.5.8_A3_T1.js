// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.valueOf property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.valueOf.length;
Date.prototype.valueOf.length = 1;
if (Date.prototype.valueOf.length !== x) {
  $ERROR('#1: The Date.prototype.valueOf.length has the attribute ReadOnly');
}
