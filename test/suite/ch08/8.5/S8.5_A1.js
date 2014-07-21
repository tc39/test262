// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: NaN !== NaN
description: Compare NaN with NaN
---*/

var x = Number.NaN;
var x_ = Number.NaN;

///////////////////////////////////////////////////////
// CHECK #1
if (x === x_){
  $ERROR('#1: NaN !== NaN ');
}
//
//////////////////////////////////////////////////////////
