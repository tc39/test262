// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseFloat has the attribute ReadOnly
esid: sec-parsefloat-string
description: Checking if varying the length property fails
includes: [propertyHelper.js]
---*/

//CHECK#1
var x = parseFloat.length;
verifyNotWritable(parseFloat, "length", null, Infinity);
assert.sameValue(parseFloat.length, x, '#1: x = parseFloat.length; parseFloat.length = Infinity; parseFloat.length === x');
