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

let iter = [0, 1, 2, 3].values().flatMap(x => x % 2 ? [] : [x]);

for (const expected of [0, 2]) {
  const result = iter.next();
  assert.sameValue(result.value, expected);
  assert.sameValue(result.done, false);
}

let result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

iter = [0, 1, 2, 3].values().flatMap(x => []);
result = iter.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);

