// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var desc = Object.getOwnPropertyDescriptor(Tuple.of, "length");
assert.sameValue(desc.value, 0);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

desc = Object.getOwnPropertyDescriptor(Tuple.of, "name");
assert.sameValue(desc.value, "of");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.of), false);

assertThrowsInstanceOf(() => {
  new Tuple.of(1, 2, 3);
}, TypeError, '`new Tuple.of(1, 2, 3)` throws TypeError');

