// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The encodeURI property has not prototype property
esid: sec-encodeuri-uri
description: Checking encodeURI.prototype
---*/

//CHECK#1
assert.sameValue(encodeURI.prototype, undefined, '#1: encodeURI.prototype === undefined');
