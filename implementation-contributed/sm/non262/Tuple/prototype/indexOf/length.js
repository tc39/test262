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
---*/var desc = Object.getOwnPropertyDescriptor(Tuple.prototype.indexOf, "length");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);


desc = Object.getOwnPropertyDescriptor(Tuple.prototype.indexOf, "name");
assert.sameValue(desc.value, "indexOf");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

desc = Object.getOwnPropertyDescriptor(Tuple.prototype, "indexOf");
assert.sameValue(desc.writable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.prototype.indexOf), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
  new t.indexOf();
}, TypeError, '`let t = #[1]; new t.indexOf()` throws TypeError');

