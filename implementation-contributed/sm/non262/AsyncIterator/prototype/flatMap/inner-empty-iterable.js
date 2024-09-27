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

async function* gen(values) {
  yield* values;
}

(async () => {
  let iter = gen([0, 1, 2, 3]).flatMap(x => x % 2 ? gen([]) : gen([x]));

  for (const expected of [0, 2]) {
    const result = await iter.next();
    assert.sameValue(result.value, expected);
    assert.sameValue(result.done, false);
  }

  let result = await iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);

  iter = gen([0, 1, 2, 3]).flatMap(x => gen([]));
  result = await iter.next();
  assert.sameValue(result.value, undefined);
  assert.sameValue(result.done, true);
})();

