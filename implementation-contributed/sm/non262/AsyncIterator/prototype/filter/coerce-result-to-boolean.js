// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags:
- IsHTMLDDA
- noStrict
includes:
- non262-shell.js
- shell.js
features:
- AsyncIterator
description: |
  pending
esid: pending
---*/
async function* gen(iterable) {
  yield* iterable;
}

// All truthy values are kept.
const truthyValues = [true, 1, [], {}, 'test'];
(async () => {
  for await (const value of gen([...truthyValues]).filter(x => x)) {
    assert.sameValue(truthyValues.shift(), value);
  }
})();

// All falsy values are filtered out.
const falsyValues = [false, 0, '', null, undefined, NaN, -0, 0n, createIsHTMLDDA()];
gen(falsyValues).filter(x => x).next().then(
  ({done, value}) => {
    assert.sameValue(done, true);
    assert.sameValue(value, undefined);
  }
);

