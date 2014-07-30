// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Object.prototype.isPrototypeOf can't be used as a constructor
es5id: 15.2.4.6_A7
description: Checking if creating new "Object.prototype.isPrototypeOf" fails
includes:
    - $PRINT.js
    - $FAIL.js
---*/

var FACTORY = Object.prototype.isPrototypeOf;

try {
  instance = new FACTORY;
  $FAIL('#1: Object.prototype.isPrototypeOf can\'t be used as a constructor');
} catch (e) {
  $PRINT(e);

}
