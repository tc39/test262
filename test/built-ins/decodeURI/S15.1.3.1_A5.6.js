// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The decodeURI property has not prototype property
esid: sec-decodeuri-encodeduri
description: Checking decodeURI.prototype
---*/

//CHECK#1
assert.sameValue(decodeURI.prototype, undefined, '#1: decodeURI.prototype === undefined');
