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
---*/var desc = Object.getOwnPropertyDescriptor(Tuple.isTuple, "length");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);


desc = Object.getOwnPropertyDescriptor(Tuple.isTuple, "name");
assert.sameValue(desc.value, "isTuple");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.isTuple), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
    new t.isTuple()();
}, TypeError, '`let t = #[1]; new t.isTuple()` throws TypeError');

