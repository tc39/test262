// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getUTCMinutes property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.getUTCMinutes.length;
Date.prototype.getUTCMinutes.length = 1;
if (Date.prototype.getUTCMinutes.length !== x) {
  $ERROR('#1: The Date.prototype.getUTCMinutes.length has the attribute ReadOnly');
}
