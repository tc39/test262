// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.valueOf property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.valueof
es5id: 15.9.5.8_A3_T2
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.valueOf.length !== true) {
  $ERROR('#1: The Date.prototype.valueOf.length property does not have the attributes DontDelete');
}

if (Date.prototype.valueOf.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.valueOf.length property does not have the attributes DontDelete');
}
