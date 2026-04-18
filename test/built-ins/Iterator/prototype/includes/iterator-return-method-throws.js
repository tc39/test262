// Copyright (C) 2026 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.includes
description: >
  Iterator has throwing return method
features: [iterator-includes]
---*/

let iterator = {
  __proto__: Iterator.prototype,
  next() {
    return {
      done: false,
      value: 0,
    };
  },
  return() {
    throw new Test262Error();
  }
};

assert.throws(Test262Error, function() {
  iterator.includes(0);
});
