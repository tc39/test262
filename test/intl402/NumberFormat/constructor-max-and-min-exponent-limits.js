// Copyright 2023 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tointlmathematicalvalue
description: Tests exponent limits
features: [Intl.NumberFormat-v3]
---*/

const nf = Intl.NumberFormat();

assert(nf.format(-100e306).length > 411 ,"Should output -100,000,000...");
assert.sameValue(nf.format(-100e307), "-∞", "Should output -∞");
assert.sameValue(nf.format(-100e309), "-∞", "Should output -∞");
assert.sameValue(nf.format(-100e310), "-∞", "Should output -∞");

assert.sameValue(nf.format(-100e-306), "-0", "Should output  -0");
assert.sameValue(nf.format(-100e-309), "-0", "Should output  -0");
assert.sameValue(nf.format(-100e-310), "-0", "Should output  -0");

assert(nf.format(100e306).length > 411 ,"Should output 100,000,000...");
assert.sameValue(nf.format(100e307), "∞", "Should output  ∞");
assert.sameValue(nf.format(100e309), "∞", "Should output  ∞");
assert.sameValue(nf.format(100e310), "∞", "Should output  ∞");

assert.sameValue(nf.format(100e-308), "0", "Should output  0");
assert.sameValue(nf.format(100e-309), "0", "Should output  0");
assert.sameValue(nf.format(100e-310), "0", "Should output  0");

assert.sameValue(nf.format(Number.MAX_VALUE * -2), "-∞", "Should output  -∞");
assert.sameValue(nf.format(Number.MAX_VALUE * 2), "∞", "Should output ∞");
assert.sameValue(nf.format(Number.MIN_VALUE * -2), "-0", "Should output -0");
assert.sameValue(nf.format(Number.MIN_VALUE * 2), "0", "Should output  0");
