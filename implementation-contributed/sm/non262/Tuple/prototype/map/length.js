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
---*/var desc = Object.getOwnPropertyDescriptor(Tuple.prototype.map, "length");
assert.sameValue(desc.value, 1);
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);


desc = Object.getOwnPropertyDescriptor(Tuple.prototype.map, "name");
assert.sameValue(desc.value, "map");
assert.sameValue(desc.writable, false);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

desc = Object.getOwnPropertyDescriptor(Tuple.prototype, "map");
assert.sameValue(desc.writable, true);
assert.sameValue(desc.enumerable, false);
assert.sameValue(desc.configurable, true);

assert.sameValue(isConstructor(Tuple.prototype.map), false);

assertThrowsInstanceOf(() => {
  let t = #[1];
  new t.map();
}, TypeError, '`let t = #[1]; new t.map()` throws TypeError');

