// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Object.prototype.propertyIsEnumerable.length property has the
    attribute ReadOnly
es5id: 15.2.4.7_A10
description: >
    Checking if varying the
    Object.prototype.propertyIsEnumerable.length property fails
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (!(Object.prototype.propertyIsEnumerable.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.propertyIsEnumerable has length property');
}

var obj = Object.prototype.propertyIsEnumerable.length;

Object.prototype.propertyIsEnumerable.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.propertyIsEnumerable.length !== obj) {
  $ERROR('#2: the Object.prototype.propertyIsEnumerable length property has the attributes ReadOnly');
}
