// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Object.prototype property has the attribute ReadOnly
description: Checking if varying "Object.prototype" property fails
---*/

var obj = Object.prototype;
Object.prototype = function(){return "shifted";};

//CHECK#1
if (Object.prototype !== obj) {
  $ERROR('#1: the Object.prototype property has the attributes ReadOnly.');
}

//CHECK#2
try {
  Object.prototype();
  $ERROR('#2: the Object.prototype property has the attributes ReadOnly');
} catch (e) {
  ;
}
