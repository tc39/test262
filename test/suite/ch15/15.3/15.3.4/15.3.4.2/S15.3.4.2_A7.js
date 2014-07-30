// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.toString can't be used as constructor
es5id: 15.3.4.2_A7
description: Checking if creating "new Function.prototype.toString" fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

var FACTORY = Function.prototype.toString;

try {
  var instance = new FACTORY;
  $FAIL('#1: Function.prototype.toString can\'t be used as constructor');
} catch (e) {
  $PRINT(e);
}
