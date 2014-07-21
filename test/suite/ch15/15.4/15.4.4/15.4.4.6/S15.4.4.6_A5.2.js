// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of pop has the attribute DontDelete
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.prototype.pop.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.pop.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.pop.hasOwnProperty('length')));
}

delete Array.prototype.pop.length;

//CHECK#2
if (Array.prototype.pop.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.pop.length; Array.prototype.pop.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.pop.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.pop.length === undefined) {
  $ERROR('#3: delete Array.prototype.pop.length; Array.prototype.pop.length !== undefined');
}
