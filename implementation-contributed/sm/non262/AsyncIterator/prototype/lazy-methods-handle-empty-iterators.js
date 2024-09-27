// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.


//
//
/*---
esid: pending
description: |
  Lazy %AsyncIterator.prototype% methods handle empty iterators.
info: |
  Iterator Helpers proposal 2.1.6
features:
- AsyncIterator
- iterator-helpers
includes:
- non262-shell.js
- shell.js
flags:
- noStrict
---*/

class EmptyIterator extends AsyncIterator {
  async next() { 
    return {done: true};
  }
}

async function* gen() {}

const methods = [
  iter => iter.map(x => x),
  iter => iter.filter(x => x),
  iter => iter.take(1),
  iter => iter.drop(0),
  iter => iter.asIndexedPairs(),
  iter => iter.flatMap(x => gen()),
];

for (const method of methods) {
  for (const iterator of [new EmptyIterator(), gen()]) {
    method(iterator).next().then(
      ({done, value}) => {
        assert.sameValue(done, true);
        assert.sameValue(value, undefined);
      }
    );
  }
}

