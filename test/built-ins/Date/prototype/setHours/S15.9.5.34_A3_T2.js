// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The Date.prototype.setHours property "length" has { ReadOnly, !
    DontDelete, DontEnum } attributes
esid: sec-date.prototype.sethours
description: Checking DontDelete attribute
---*/
assert.sameValue(
  delete Date.prototype.setHours.length,
  true,
  'The value of `delete Date.prototype.setHours.length` is expected to be true'
);

assert(
  !Date.prototype.setHours.hasOwnProperty('length'),
  'The value of !Date.prototype.setHours.hasOwnProperty(\'length\') is expected to be true'
);
