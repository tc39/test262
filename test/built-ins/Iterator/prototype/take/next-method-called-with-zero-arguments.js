// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.take
description: >
  Underlying iterator's next method is called with zero arguments.
info: |
  27.1.4.11 Iterator.prototype.take ( limit )

  ...
  10. Let closure be a new Abstract Closure with no parameters that captures
      iterated and integerLimit and performs the following steps when called:
    ...
    b. Repeat,
      ...
      iii. Let value be ? IteratorStepValue(iterated).
      ...
  ...
features: [iterator-helpers]
---*/

var counter = 0;

var underlying = {
  next() {
    assert.sameValue(arguments.length, 0);

    return {
      done: false,
      value: ++counter,
    };
  }
};

var it = Iterator.prototype.take.call(underlying, 3);

assert.sameValue(counter, 0);

assert.sameValue(it.next().value, 1);
assert.sameValue(it.next(1).value, 2);
assert.sameValue(it.next(1, 2).value, 3);

assert.sameValue(counter, 3);
