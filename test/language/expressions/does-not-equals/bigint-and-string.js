// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Non-strict inequality comparison of BigInt and String values
esid: sec-abstract-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(0n != "", false);
assert.sameValue("" != 0n, false);
assert.sameValue(0n != "-0", false);
assert.sameValue("-0" != 0n, false);
assert.sameValue(0n != "0", false);
assert.sameValue("0" != 0n, false);
assert.sameValue(0n != "-1", true);
assert.sameValue("-1" != 0n, true);
assert.sameValue(0n != "1", true);
assert.sameValue("1" != 0n, true);
assert.sameValue(0n != "foo", true);
assert.sameValue("foo" != 0n, true);
assert.sameValue(1n != "", true);
assert.sameValue("" != 1n, true);
assert.sameValue(1n != "-0", true);
assert.sameValue("-0" != 1n, true);
assert.sameValue(1n != "0", true);
assert.sameValue("0" != 1n, true);
assert.sameValue(1n != "-1", true);
assert.sameValue("-1" != 1n, true);
assert.sameValue(1n != "1", false);
assert.sameValue("1" != 1n, false);
assert.sameValue(1n != "foo", true);
assert.sameValue("foo" != 1n, true);
assert.sameValue(-1n != "-", true);
assert.sameValue("-" != -1n, true);
assert.sameValue(-1n != "-0", true);
assert.sameValue("-0" != -1n, true);
assert.sameValue(-1n != "-1", false);
assert.sameValue("-1" != -1n, false);
assert.sameValue(-1n != "-foo", true);
assert.sameValue("-foo" != -1n, true);
assert.sameValue(900719925474099101n != "900719925474099101", false);
assert.sameValue("900719925474099101" != 900719925474099101n, false);
assert.sameValue(900719925474099102n != "900719925474099101", true);
assert.sameValue("900719925474099101" != 900719925474099102n, true);
