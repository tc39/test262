// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of decodeURI does not have the attribute DontDelete
esid: sec-decodeuri-encodeduri
description: Checking use hasOwnProperty, delete
---*/

//CHECK#1
assert.sameValue(decodeURI.hasOwnProperty('length'), true, '#1: decodeURI.hasOwnProperty(\'length\') === true');

delete decodeURI.length;

//CHECK#2
assert.sameValue(decodeURI.hasOwnProperty('length'), false, '#2: delete decodeURI.length; decodeURI.hasOwnProperty(\'length\') === false');

//CHECK#3
if (decodeURI.length === undefined) {
  throw new Test262Error('#3: delete decodeURI.length; decodeURI.length !== undefined');
}
