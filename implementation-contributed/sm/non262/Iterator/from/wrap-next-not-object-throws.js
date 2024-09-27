// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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
---*/const iter = (value) => Iterator.from({
  next: () => value,
});

for (let value of [
  undefined,
  null,
  0,
  false,
  "test",
  Symbol(""),
]) {
  assert.sameValue(iter(value).next(), value);
}

