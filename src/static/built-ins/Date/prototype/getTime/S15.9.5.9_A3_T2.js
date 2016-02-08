// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getTime property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
es5id: 15.9.5.9_A3_T2
description: Checking DontDelete attribute
---*/

if (delete Date.prototype.getTime.length  !== true) {
  $ERROR('#1: The Date.prototype.getTime.length property does not have the attributes DontDelete');
}

if (Date.prototype.getTime.hasOwnProperty('length')) {
  $ERROR('#2: The Date.prototype.getTime.length property does not have the attributes DontDelete');
}
