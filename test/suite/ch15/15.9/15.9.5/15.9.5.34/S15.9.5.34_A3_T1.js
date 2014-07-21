// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setHours property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.setHours.length;
Date.prototype.setHours.length = 1;
if (Date.prototype.setHours.length !== x) {
  $ERROR('#1: The Date.prototype.setHours.length has the attribute ReadOnly');
}
