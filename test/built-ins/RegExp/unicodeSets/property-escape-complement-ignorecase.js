// Copyright (C) 2026 Artsiom Yafremau. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-charactercomplement
description: With the `i` and `v` flags, `\P{ASCII}` does not match characters whose simple case folding is ASCII
features: [regexp-v-flag]
---*/

assert.sameValue(/\P{ASCII}/iv.test("ſ"), false, "U+017F LATIN SMALL LETTER LONG S folds to s");
assert.sameValue(/\P{ASCII}/iv.test("K"), false, "U+212A KELVIN SIGN folds to k");
assert.sameValue(/\P{ASCII}/iv.test("S"), false, "S folds to s");
assert.sameValue(/\P{ASCII}/iv.test("k"), false, "k is ASCII");

assert.sameValue(/\P{ASCII}/iv.test("é"), true, "U+00E9 is not ASCII");
assert.sameValue(/\P{ASCII}/iv.test("É"), true, "U+00C9 folds to U+00E9, which is not ASCII");
