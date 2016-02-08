// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setMilliseconds" has { DontEnum } attributes
es5id: 15.9.5.28_A1_T3
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('setMilliseconds')) {
  $ERROR('#1: The Date.prototype.setMilliseconds property has the attribute DontEnum');
}

for(var x in Date.prototype) {
  if(x === "setMilliseconds") {
    $ERROR('#2: The Date.prototype.setMilliseconds has the attribute DontEnum');
  }
}
