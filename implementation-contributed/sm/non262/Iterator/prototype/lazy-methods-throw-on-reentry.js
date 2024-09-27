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
description: |
  pending
esid: pending
---*/
const methods = [
  iter => iter.map,
  iter => iter.filter,
  iter => iter.flatMap,
];

for (const method of methods) {
  const iter = [1].values();
  const iterMethod = method(iter);
  let iterHelper;
  iterHelper = iterMethod.call(iter, x => iterHelper.next());
  assertThrowsInstanceOf(() => iterHelper.next(), TypeError);
}

