// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "valueOf" has { DontEnum } attributes
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('valueOf')) {
  $ERROR('#1: The Date.prototype.valueOf property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "valueOf") {
    $ERROR('#2: The Date.prototype.valueOf has the attribute DontEnum');
  }
}
