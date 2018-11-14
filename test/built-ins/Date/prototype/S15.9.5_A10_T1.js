// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype has the property "getFullYear"
esid: sec-properties-of-the-date-prototype-object
es5id: 15.9.5_A10_T1
description: The Date.prototype has the property "getFullYear"
---*/

if (Date.prototype.hasOwnProperty("getFullYear") !== true) {
  $ERROR('#1: The Date.prototype has the property "getFullYear"');
}
