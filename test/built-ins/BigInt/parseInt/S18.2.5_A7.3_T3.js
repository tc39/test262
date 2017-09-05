// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Return sign * Result(17)
esid: sec-bigint-parseint-string-radix
description: Checking algorithm for R = 10
---*/

assert.sameValue(BigInt.parseInt("-1", 10), -1n);
assert.sameValue(BigInt.parseInt("-10", 10), -10n);
assert.sameValue(BigInt.parseInt("-100", 10), -100n);
assert.sameValue(BigInt.parseInt("-1000", 10), -1000n);
assert.sameValue(BigInt.parseInt("-10000", 10), -10000n);
assert.sameValue(BigInt.parseInt("-100000", 10), -100000n);
assert.sameValue(BigInt.parseInt("-1000000", 10), -1000000n);
assert.sameValue(BigInt.parseInt("-10000000", 10), -10000000n);
assert.sameValue(BigInt.parseInt("-100000000", 10), -100000000n);
assert.sameValue(BigInt.parseInt("-1000000000", 10), -1000000000n);
assert.sameValue(BigInt.parseInt("-10000000000", 10), -10000000000n);
assert.sameValue(BigInt.parseInt("-100000000000", 10), -100000000000n);
assert.sameValue(BigInt.parseInt("-1000000000000", 10), -1000000000000n);
assert.sameValue(BigInt.parseInt("-10000000000000", 10), -10000000000000n);
assert.sameValue(BigInt.parseInt("-100000000000000", 10), -100000000000000n);
assert.sameValue(BigInt.parseInt("-1000000000000000", 10), -1000000000000000n);
assert.sameValue(BigInt.parseInt("-10000000000000000", 10), -10000000000000000n);
assert.sameValue(BigInt.parseInt("-100000000000000000", 10), -100000000000000000n);
assert.sameValue(BigInt.parseInt("-1000000000000000000", 10), -1000000000000000000n);
assert.sameValue(BigInt.parseInt("-10000000000000000000", 10), -10000000000000000000n);
