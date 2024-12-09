// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262-shell.js, sm/non262.js]
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

assertThrowsInstanceOf(() => iter.some(), TypeError);
assertThrowsInstanceOf(
  otherGlobal.Iterator.prototype.some.bind(iter),
  otherGlobal.TypeError,
  'TypeError comes from the realm of the method.',
);

