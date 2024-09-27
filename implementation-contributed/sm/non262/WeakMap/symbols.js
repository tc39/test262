// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-WeakMap-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  requires shell-options
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

var m = new WeakMap;
var sym = Symbol();
m.set(sym, 0);
assert.sameValue(m.get(sym), 0);

// sym1 will be registered in global Symbol registry hence cannot be used as a
// key in WeakMap.
var sym1 = Symbol.for("testKey");
assertThrowsInstanceOf(() => m.set(sym1, 1), TypeError);

// Well-known symbols can be used as weakmap keys.
var sym2 = Symbol.hasInstance;
m.set(sym2, 2);
assert.sameValue(m.get(sym2), 2);

