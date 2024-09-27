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
description: |
  pending
esid: pending
---*/

const iter = [1, 2].values().flatMap(function*(x) {
  yield x;
  yield* [x + 1, x + 2];
});

for (const expected of [1, 2, 3, 2, 3, 4]) {
  const result = iter.next();
  assert.sameValue(result.value, expected);
  assert.sameValue(result.done, false);
}

const result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

