// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "toLocaleString" has { DontEnum } attributes
esid: sec-date.prototype.tolocalestring
es5id: 15.9.5.5_A1_T2
description: Checking absence of DontDelete attribute
---*/

if (delete Date.prototype.toLocaleString  === false) {
  $ERROR('#1: The Date.prototype.toLocaleString property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('toLocaleString')) {
  $ERROR('#2: The Date.prototype.toLocaleString property has not the attributes DontDelete');
}
