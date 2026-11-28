// Copyright (C) 2026 Artsiom Yafremau. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-compilecharacterclass
description: With the `i` and `v` flags, `[^\p{ASCII}]` does not match characters whose simple case folding is ASCII
features: [regexp-v-flag]
---*/

assert.sameValue(/[^\p{ASCII}]/iv.test("ſ"), false, "U+017F LATIN SMALL LETTER LONG S folds to s");
assert.sameValue(/[^\p{ASCII}]/iv.test("K"), false, "U+212A KELVIN SIGN folds to k");
assert.sameValue(/[^\p{ASCII}]/iv.test("S"), false, "S folds to s");
assert.sameValue(/[^\p{ASCII}]/iv.test("k"), false, "k is ASCII");

assert.sameValue(/[^\p{ASCII}]/iv.test("é"), true, "U+00E9 is not ASCII");
assert.sameValue(/[^\p{ASCII}]/iv.test("É"), true, "U+00C9 folds to U+00E9, which is not ASCII");
