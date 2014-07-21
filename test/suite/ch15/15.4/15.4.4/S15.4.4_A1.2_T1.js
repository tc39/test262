// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The [[Class]] property of the Array prototype object is set to "Array"
description: Checking use Object.prototype.toString
---*/

//CHECK#1
Array.prototype.getClass = Object.prototype.toString;
if (Array.prototype.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: Array.prototype.getClass = Object.prototype.toString; Array.prototype is Array object. Actual: ' + (Array.prototype.getClass()));
}
