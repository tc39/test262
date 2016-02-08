// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype property "toLocaleDateString" has { DontEnum }
    attributes
es5id: 15.9.5.6_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('toLocaleDateString')) {
  $ERROR('#1: The Date.prototype.toLocaleDateString property has the attribute DontEnum');
}

for(var x in Date.prototype) {
  if(x === "toLocaleDateString") {
    $ERROR('#2: The Date.prototype.toLocaleDateString has the attribute DontEnum');
  }
}
