// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The BigInt.parseInt property has the attribute DontEnum
esid: sec-bigint-parseint-string-radix
description: Checking use propertyIsEnumerable, for-in
---*/


assert.sameValue(BigInt.propertyIsEnumerable("parseInt"), false);

for (var p in this) {
  assert.notSameValue(p, "parseInt");
}
