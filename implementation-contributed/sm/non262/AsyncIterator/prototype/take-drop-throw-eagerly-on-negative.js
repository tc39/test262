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
- AsyncIterator
description: |
  pending
esid: pending
---*/

async function* gen() {}
const iter = gen();
const methods = [
  value => iter.take(value),
  value => iter.drop(value),
];

for (const method of methods) {
  assertThrowsInstanceOf(() => method(-1), RangeError);
  assertThrowsInstanceOf(() => method(-Infinity), RangeError);

  // Both -0 and -0.9 round towards 0.
  method(-0);
  method(-0.9);
}

