// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Global object properties have attributes { DontEnum }
es5id: 10.2.3_A2.2_T1
description: Function execution context - Value Properties
flags: [noStrict]
---*/

function test() {
  //CHECK#1
  for (var x in this) {
    if (x === 'NaN') {
      $ERROR("#1: 'NaN' have attribute DontEnum");
    } else if (x === 'Infinity') {
      $ERROR("#1: 'Infinity' have attribute DontEnum");
    } else if (x === 'undefined') {
      $ERROR("#1: 'undefined' have attribute DontEnum");
    }
  }
}

test();
