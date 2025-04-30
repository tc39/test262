// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
features:
  - iterator-helpers
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

const otherGlobal = createNewGlobal({newCompartment: true});
assert.sameValue(TypeError !== otherGlobal.TypeError, true);

const iter = [].values();

assert.throws(TypeError, () => iter.every());
assert.throws(
  otherGlobal.TypeError,
  otherGlobal.Iterator.prototype.every.bind(iter),
  'TypeError comes from the realm of the method.',
);

