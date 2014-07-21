// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Number property "prototype" has { DontEnum, DontDelete, ReadOnly }
    attributes
description: Checking if enumerating the Number.prototype property fails
---*/

if (Number.propertyIsEnumerable('prototype')) {
  $ERROR('#1: The Number.prototype property has the attribute DontEnum');
}

for(x in Number) {
  if(x === "prototype") {
    $ERROR('#2: The Number.prototype has the attribute DontEnum');
  }
}
