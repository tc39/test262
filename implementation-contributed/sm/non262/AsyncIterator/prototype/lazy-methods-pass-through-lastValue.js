// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

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
class TestAsyncIterator extends AsyncIterator {
  async next(value) { 
    return {done: false, value};
  }
}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => true),
  iter => iter.take(2),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
];

for (const method of methods) {
  const iterator = new TestAsyncIterator();
  const iteratorHelper = method(iterator);
  iteratorHelper.next().then(
    _ => iteratorHelper.next('last value').then(
      ({done, value}) => {
        assert.sameValue(done, false);
        // Unwrap the return value from asIndexedPairs.
        assert.sameValue(Array.isArray(value) ? value[1] : value, 'last value');
      }
    ),
  );
}

