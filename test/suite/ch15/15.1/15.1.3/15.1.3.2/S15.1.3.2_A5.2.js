// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of decodeURIComponent has the attribute DontDelete
description: Checking use hasOwnProperty, delete
includes: [$FAIL.js]
---*/

//CHECK#1
if (decodeURIComponent.hasOwnProperty('length') !== true) {
  $FAIL('#1: decodeURIComponent.hasOwnProperty(\'length\') === true. Actual: ' + (decodeURIComponent.hasOwnProperty('length')));
}

delete decodeURIComponent.length;

//CHECK#2
if (decodeURIComponent.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete decodeURIComponent.length; decodeURIComponent.hasOwnProperty(\'length\') === true. Actual: ' + (decodeURIComponent.hasOwnProperty('length')));
}

//CHECK#3
if (decodeURIComponent.length === undefined) {
  $ERROR('#3: delete decodeURIComponent.length; decodeURIComponent.length !== undefined');
}
