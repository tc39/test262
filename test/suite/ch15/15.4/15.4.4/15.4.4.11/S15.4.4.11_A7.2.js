// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of sort has the attribute DontDelete
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.prototype.sort.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.sort.prototype.hasOwnProperty(\'length\') === true. Actual: ' + (Array.sort.prototype.hasOwnProperty('length')));
}

delete Array.prototype.sort.length;

//CHECK#2
if (Array.prototype.sort.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.sort.length; Array.prototype.sort.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.sort.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.sort.length === undefined) {
  $ERROR('#3: delete Array.prototype.sort.length; Array.prototype.sort.length !== undefined');
}
