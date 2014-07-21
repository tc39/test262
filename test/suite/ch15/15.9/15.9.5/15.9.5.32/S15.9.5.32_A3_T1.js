// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.setMinutes property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.setMinutes.length;
Date.prototype.setMinutes.length = 1;
if (Date.prototype.setMinutes.length !== x) {
  $ERROR('#1: The Date.prototype.setMinutes.length has the attribute ReadOnly');
}
