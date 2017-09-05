// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The BigInt.parseInt property has no prototype property
esid: sec-bigint-parseint-string-radix
description: Checking BigInt.parseInt.prototype
---*/

assert.sameValue(BigInt.parseInt.prototype, undefined);
