// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Function.prototype.apply.length property has the attribute ReadOnly
es5id: 15.3.4.3_A10
description: >
    Checking if varying the Function.prototype.apply.length property
    fails
includes: [$FAIL.js]
---*/

//CHECK#1
if (!(Function.prototype.apply.hasOwnProperty('length'))) {
  $FAIL('#1: the Function.prototype.apply has length property.');
}

var obj = Function.prototype.apply.length;

Function.prototype.apply.length = function(){return "shifted";};

//CHECK#2
if (Function.prototype.apply.length !== obj) {
  $ERROR('#2: the Function.prototype.apply length property has the attributes ReadOnly.');
}
