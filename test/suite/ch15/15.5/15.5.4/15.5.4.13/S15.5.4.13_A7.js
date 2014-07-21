// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.slice can't be used as constructor
description: Checking if creating the String.prototype.slice object fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

var __FACTORY = String.prototype.slice;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.slice; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  $PRINT(e);
}
