// Copyright (C) 2025 Luca Casonato. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-string.prototype.matchall
description: >
  If a separator is a bigint primitive, its Symbol.matchAll property is not accessed.
info: |
  String.prototype.matchAll ( regexp )

  [...]
  2. If separator is not Object, then
    [...]
  [...]

features: [Symbol.matchAll]
---*/

Object.defineProperty(BigInt.prototype, Symbol.matchAll, {
  get: function() {
    throw new Test262Error("should not be called");
  },
});

var matcher = 1n;

const matched = "a1b1c".matchAll(matcher);
const matchesArray = Array.from(matched);
assert.sameValue(matchesArray[0].index, 1);
assert.sameValue(matchesArray[0].input, "a1b1c");
assert.sameValue(matchesArray[0][0], "1");
assert.sameValue(matchesArray[1].index, 3);
assert.sameValue(matchesArray[1].input, "a1b1c");
assert.sameValue(matchesArray[1][0], "1");
assert.sameValue(matchesArray.length, 2);
