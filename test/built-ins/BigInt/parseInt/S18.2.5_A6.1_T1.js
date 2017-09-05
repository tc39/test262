// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    If S contains any character that is not a radix-R digit,
    then let Z be the substring of S consisting of all characters before
    the first such character; otherwise, let Z be S
esid: sec-bigint-parseint-string-radix
description: Complex test. R in [2, 36]
---*/

for (var i = 2; i <= 36; i++) {
    assert.sameValue(BigInt.parseInt("10$1", i), BigInt(i));
}
