// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Value Property SQRT2 of the Math Object has the attribute DontEnum
es5id: 15.8.1.8_A2
description: Checking if Math.SQRT2 property has the attribute DontEnum
---*/

// CHECK#1
for(var x in Math) {
  if(x === "SQRT2") {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="SQRT2"}\'');
  }
}
