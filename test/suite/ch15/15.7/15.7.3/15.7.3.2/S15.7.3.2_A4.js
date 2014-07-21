// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MAX_VALUE has the attribute DontEnum
description: Checking if enumerating Number.MAX_VALUE fails
---*/

//CHECK#1
for(var x in Number) {
  if(x === "MAX_VALUE") {
    $ERROR('#1: Number.MAX_VALUE has the attribute DontEnum');
  }
}

if (Number.propertyIsEnumerable('MAX_VALUE')) {
  $ERROR('#2: Number.MAX_VALUE has the attribute DontEnum');
}
