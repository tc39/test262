// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Strict equality comparison of BigInt values and non-primitive objects
esid: sec-strict-equality-comparison
info: |
  1. If Type(x) is different from Type(y), return false.

features: [BigInt]
---*/

assert.sameValue(0n === Object(0n), false, "0n === Object(0n)");
assert.sameValue(Object(0n) === 0n, false, "Object(0n) === 0n");
assert.sameValue(0n === Object(1n), false, "0n === Object(1n)");
assert.sameValue(Object(1n) === 0n, false, "Object(1n) === 0n");
assert.sameValue(1n === Object(0n), false, "1n === Object(0n)");
assert.sameValue(Object(0n) === 1n, false, "Object(0n) === 1n");
assert.sameValue(1n === Object(1n), false, "1n === Object(1n)");
assert.sameValue(Object(1n) === 1n, false, "Object(1n) === 1n");
assert.sameValue(2n === Object(0n), false, "2n === Object(0n)");
assert.sameValue(Object(0n) === 2n, false, "Object(0n) === 2n");
assert.sameValue(2n === Object(1n), false, "2n === Object(1n)");
assert.sameValue(Object(1n) === 2n, false, "Object(1n) === 2n");
assert.sameValue(2n === Object(2n), false, "2n === Object(2n)");
assert.sameValue(Object(2n) === 2n, false, "Object(2n) === 2n");
assert.sameValue(0n === {}, false, "0n === {}");
assert.sameValue({} === 0n, false, "{} === 0n");
assert.sameValue(0n === {valueOf: function() { return 0n; }}, false, "0n === {valueOf: function() { return 0n; }}");
assert.sameValue({valueOf: function() { return 0n; }} === 0n, false, "{valueOf: function() { return 0n; }} === 0n");
assert.sameValue(0n === {valueOf: function() { return 1n; }}, false, "0n === {valueOf: function() { return 1n; }}");
assert.sameValue({valueOf: function() { return 1n; }} === 0n, false, "{valueOf: function() { return 1n; }} === 0n");
assert.sameValue(0n === {toString: function() { return "0"; }}, false, "0n === {toString: function() { return \"0\"; }}");
assert.sameValue({toString: function() { return "0"; }} === 0n, false, "{toString: function() { return \"0\"; }} === 0n");
assert.sameValue(0n === {toString: function() { return "1"; }}, false, "0n === {toString: function() { return \"1\"; }}");
assert.sameValue({toString: function() { return "1"; }} === 0n, false, "{toString: function() { return \"1\"; }} === 0n");
assert.sameValue(900719925474099101n === {valueOf: function() { return 900719925474099101n; }}, false, "900719925474099101n === {valueOf: function() { return 900719925474099101n; }}");
assert.sameValue({valueOf: function() { return 900719925474099101n; }} === 900719925474099101n, false, "{valueOf: function() { return 900719925474099101n; }} === 900719925474099101n");
assert.sameValue(900719925474099101n === {valueOf: function() { return 900719925474099102n; }}, false, "900719925474099101n === {valueOf: function() { return 900719925474099102n; }}");
assert.sameValue({valueOf: function() { return 900719925474099102n; }} === 900719925474099101n, false, "{valueOf: function() { return 900719925474099102n; }} === 900719925474099101n");
assert.sameValue(900719925474099101n === {toString: function() { return "900719925474099101"; }}, false, "900719925474099101n === {toString: function() { return \"900719925474099101\"; }}");
assert.sameValue({toString: function() { return "900719925474099101"; }} === 900719925474099101n, false, "{toString: function() { return \"900719925474099101\"; }} === 900719925474099101n");
assert.sameValue(900719925474099101n === {toString: function() { return "900719925474099102"; }}, false, "900719925474099101n === {toString: function() { return \"900719925474099102\"; }}");
assert.sameValue({toString: function() { return "900719925474099102"; }} === 900719925474099101n, false, "{toString: function() { return \"900719925474099102\"; }} === 900719925474099101n");
