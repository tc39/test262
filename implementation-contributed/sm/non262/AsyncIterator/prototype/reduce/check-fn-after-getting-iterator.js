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
---*/const log = [];
const handlerProxy = new Proxy({}, {
  get: (target, key, receiver) => (...args) => {
    log.push(`${key}: ${args[1]?.toString()}`);
    return Reflect[key](...args);
  },
});

class TestIterator extends AsyncIterator {
  next() {
    return Promise.resolve({ done: this.closed });
  }
}

const iter = new Proxy(new TestIterator(), handlerProxy);
iter.reduce(1).then(() => assert.sameValue(true, false, 'expected error'), err => {
  assert.sameValue(err instanceof TypeError, true);
  assert.sameValue(
    log.join('\n'),
    `get: reduce
get: next`
  );
});

