// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Boolean constructor has length property whose value is 1
es5id: 15.6.3_A3
description: Checking Boolean.length property
---*/

//CHECK#1
if (!Boolean.hasOwnProperty("length")){
  $ERROR('#1: Boolean constructor has length property');
}

//CHECK#2
if (Boolean.length !== 1) {
  $ERROR('#2: Boolean constructor length property value is 1');
}
