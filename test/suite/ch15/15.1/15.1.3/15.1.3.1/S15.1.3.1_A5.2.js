// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of decodeURI has the attribute DontDelete
es5id: 15.1.3.1_A5.2
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (decodeURI.hasOwnProperty('length') !== true) {
  $FAIL('#1: decodeURI.hasOwnProperty(\'length\') === true. Actual: ' + (decodeURI.hasOwnProperty('length')));
}

delete decodeURI.length;

//CHECK#2
if (decodeURI.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete decodeURI.length; decodeURI.hasOwnProperty(\'length\') === true. Actual: ' + (decodeURI.hasOwnProperty('length')));
}

//CHECK#3
if (decodeURI.length === undefined) {
  $ERROR('#3: delete decodeURI.length; decodeURI.length !== undefined');
}
