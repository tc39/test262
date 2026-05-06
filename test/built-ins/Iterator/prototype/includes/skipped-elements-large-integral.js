// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Large integral Number skippedElements values (above Number.MAX_SAFE_INTEGER) are accepted
features: [iterator-includes]
---*/

let returnCalls = 0;
let counter = 0;
let iter = {
  __proto__: Iterator.prototype,
  next() {
    if (counter < 10) {
      return { done: false, value: counter++ };
    }
    return { done: true, value: undefined };
  },
  return() {
    ++returnCalls;
    return {};
  },
};

assert.sameValue(iter.includes(1, 2 ** 53 + 4), false);
assert.sameValue(returnCalls, 0);
