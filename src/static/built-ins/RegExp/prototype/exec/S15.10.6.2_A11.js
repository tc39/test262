// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the exec method is 1
es5id: 15.10.6.2_A11
description: Checking RegExp.prototype.exec.length
---*/

//CHECK#1
if (RegExp.prototype.exec.hasOwnProperty("length") !== true) {
  $ERROR('#1: RegExp.prototype.exec.hasOwnProperty(\'length\') === true');
}

//CHECK#2
if (RegExp.prototype.exec.length !== 1) {
  $ERROR('#2: RegExp.prototype.exec.length === 1. Actual: ' + (RegExp.prototype.exec.length));
}
