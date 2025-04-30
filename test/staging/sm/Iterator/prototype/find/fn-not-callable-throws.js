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

const iter = [].values();

assert.throws(TypeError, () => iter.find());
assert.throws(TypeError, () => iter.find(undefined));
assert.throws(TypeError, () => iter.find(null));
assert.throws(TypeError, () => iter.find(0));
assert.throws(TypeError, () => iter.find(false));
assert.throws(TypeError, () => iter.find(''));
assert.throws(TypeError, () => iter.find(Symbol('')));
assert.throws(TypeError, () => iter.find({}));

