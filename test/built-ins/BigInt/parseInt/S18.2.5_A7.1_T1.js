// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If Z is empty, return NaN
esid: sec-bigint-parseint-string-radix
description: Complex test. R in [2, 36]
---*/

for (var i = 2; i <= 36; i++) {
  assert.throws(SyntaxError, () => BigInt.parseInt("$string", i));
}
