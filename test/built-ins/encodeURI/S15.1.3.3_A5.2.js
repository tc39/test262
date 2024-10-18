// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of encodeURI does not have the attribute DontDelete
esid: sec-encodeuri-uri
description: Checking use hasOwnProperty, delete
---*/

//CHECK#1
assert.sameValue(encodeURI.hasOwnProperty('length'), true, '#1: encodeURI.hasOwnProperty(\'length\') === true');

delete encodeURI.length;

//CHECK#2
assert.sameValue(encodeURI.hasOwnProperty('length'), false, '#2: delete encodeURI.length; encodeURI.hasOwnProperty(\'length\') === false');

//CHECK#3
if (encodeURI.length === undefined) {
  throw new Test262Error('#3: delete encodeURI.length; encodeURI.length !== undefined');
}
