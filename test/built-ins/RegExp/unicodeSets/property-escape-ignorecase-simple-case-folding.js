// Copyright (C) 2026 Artsiom Yafremau. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-maybesimplecasefolding
description: With the `i` and `v` flags, `\p{ASCII}` matches characters whose simple case folding is ASCII
features: [regexp-v-flag]
---*/

assert.sameValue(/\p{ASCII}/iv.test("ſ"), true, "U+017F LATIN SMALL LETTER LONG S folds to s");
assert.sameValue(/\p{ASCII}/iv.test("K"), true, "U+212A KELVIN SIGN folds to k");
assert.sameValue(/[\p{ASCII}]/iv.test("ſ"), true, "U+017F in a class folds to s");
assert.sameValue(/[\p{ASCII}]/iv.test("K"), true, "U+212A in a class folds to k");

assert.sameValue(/\p{ASCII}/v.test("ſ"), false, "U+017F is not ASCII without the i flag");
assert.sameValue(/\p{ASCII}/v.test("K"), false, "U+212A is not ASCII without the i flag");
