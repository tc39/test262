// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of BigInt.parseInt has the attribute DontEnum
esid: sec-bigint-parseint-string-radix
description: Checking use propertyIsEnumerable, for-in
---*/

assert.sameValue(BigInt.parseInt.propertyIsEnumerable('length'), false);

for (var p in BigInt.parseInt) {
  assert.notSameValue(p, "length");
}
