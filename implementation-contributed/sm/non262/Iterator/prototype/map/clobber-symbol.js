// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

//
//

/*---
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Iterator
info: |
  Iterator is not enabled unconditionally
description: |
  pending
esid: pending
---*/

Symbol = undefined;
assertThrowsInstanceOf(() => Symbol.iterator, TypeError);

const iterator = [0].values();
assert.sameValue(
  iterator.map(x => x + 1).next().value, 1,
  '`%Iterator.prototype%.map` still works after Symbol has been clobbered'
);

