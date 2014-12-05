// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getTimezoneOffset property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
es5id: 15.9.5.26_A3_T1
description: Checking ReadOnly attribute
---*/

x = Date.prototype.getTimezoneOffset.length;
Date.prototype.getTimezoneOffset.length = 1;
if (Date.prototype.getTimezoneOffset.length !== x) {
  $ERROR('#1: The Date.prototype.getTimezoneOffset.length has the attribute ReadOnly');
}
