// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setDate property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.setDate.length;
Date.prototype.setDate.length = 1;
if (Date.prototype.setDate.length !== x) {
  $ERROR('#1: The Date.prototype.setDate.length has the attribute ReadOnly');
}
