// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setUTCDate property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.setUTCDate.length;
Date.prototype.setUTCDate.length = 1;
if (Date.prototype.setUTCDate.length !== x) {
  $ERROR('#1: The Date.prototype.setUTCDate.length has the attribute ReadOnly');
}
