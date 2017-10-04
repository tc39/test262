// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict inequality comparison of BigInt values and non-primitive objects
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(0n !== Object(0n), true);
assert.sameValue(Object(0n) !== 0n, true);
assert.sameValue(0n !== Object(1n), true);
assert.sameValue(Object(1n) !== 0n, true);
assert.sameValue(1n !== Object(0n), true);
assert.sameValue(Object(0n) !== 1n, true);
assert.sameValue(1n !== Object(1n), true);
assert.sameValue(Object(1n) !== 1n, true);
assert.sameValue(2n !== Object(0n), true);
assert.sameValue(Object(0n) !== 2n, true);
assert.sameValue(2n !== Object(1n), true);
assert.sameValue(Object(1n) !== 2n, true);
assert.sameValue(2n !== Object(2n), true);
assert.sameValue(Object(2n) !== 2n, true);
assert.sameValue(0n !== {}, true);
assert.sameValue({} !== 0n, true);
assert.sameValue(0n !== {valueOf: function() { return 0n; }}, true);
assert.sameValue({valueOf: function() { return 0n; }} !== 0n, true);
assert.sameValue(0n !== {valueOf: function() { return 1n; }}, true);
assert.sameValue({valueOf: function() { return 1n; }} !== 0n, true);
assert.sameValue(0n !== {toString: function() { return "0"; }}, true);
assert.sameValue({toString: function() { return "0"; }} !== 0n, true);
assert.sameValue(0n !== {toString: function() { return "1"; }}, true);
assert.sameValue({toString: function() { return "1"; }} !== 0n, true);
assert.sameValue(900719925474099101n !== {valueOf: function() { return 900719925474099101n; }}, true);
assert.sameValue({valueOf: function() { return 900719925474099101n; }} !== 900719925474099101n, true);
assert.sameValue(900719925474099101n !== {valueOf: function() { return 900719925474099102n; }}, true);
assert.sameValue({valueOf: function() { return 900719925474099102n; }} !== 900719925474099101n, true);
assert.sameValue(900719925474099101n !== {toString: function() { return "900719925474099101"; }}, true);
assert.sameValue({toString: function() { return "900719925474099101"; }} !== 900719925474099101n, true);
assert.sameValue(900719925474099101n !== {toString: function() { return "900719925474099102"; }}, true);
assert.sameValue({toString: function() { return "900719925474099102"; }} !== 900719925474099101n, true);
