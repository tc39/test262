// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
features:
- IsHTMLDDA
- iterator-helpers
includes: [sm/non262-shell.js, sm/non262.js]
flags:
- noStrict
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const fn = (value) => value;
assert.sameValue([true].values().every(fn), true);
assert.sameValue([1].values().every(fn), true);
assert.sameValue([[]].values().every(fn), true);
assert.sameValue([{}].values().every(fn), true);
assert.sameValue(['test'].values().every(fn), true);

assert.sameValue([false].values().every(fn), false);
assert.sameValue([0].values().every(fn), false);
assert.sameValue([''].values().every(fn), false);
assert.sameValue([null].values().every(fn), false);
assert.sameValue([undefined].values().every(fn), false);
assert.sameValue([NaN].values().every(fn), false);
assert.sameValue([-0].values().every(fn), false);
assert.sameValue([0n].values().every(fn), false);

const htmlDDA = createIsHTMLDDA();
assert.sameValue([htmlDDA].values().every(fn), false);

