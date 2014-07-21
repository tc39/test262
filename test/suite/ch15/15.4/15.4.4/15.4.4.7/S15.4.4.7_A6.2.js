// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of push has the attribute DontDelete
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.prototype.push.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.push.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.push.hasOwnProperty('length')));
}

delete Array.prototype.push.length;

//CHECK#2
if (Array.prototype.push.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.push.length; Array.prototype.push.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.push.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.push.length === undefined) {
  $ERROR('#3: delete Array.prototype.push.length; Array.prototype.push.length !== undefined');
}
