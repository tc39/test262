// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Symbol-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var symbols = [
    Symbol(),
    Symbol("ok"),
    Symbol.for("dummies"),
    Symbol.iterator
];

for (var sym of symbols) {
    assert.sameValue(sym.valueOf(), sym);
    assert.sameValue(Object(sym).valueOf(), sym);
}

// Any other value throws.
var nonsymbols = [undefined, null, NaN, {}, Symbol.prototype];
for (var nonsym of nonsymbols)
    assertThrowsInstanceOf(() => Symbol.prototype.valueOf.call(nonsym), TypeError);

