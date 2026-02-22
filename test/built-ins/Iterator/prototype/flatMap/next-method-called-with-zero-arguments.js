// Copyright (C) 2025 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iteratorprototype.flatmap
description: >
  Underlying iterator's next method is called with zero arguments.
info: |
  27.1.4.6 Iterator.prototype.flatMap ( mapper )

  ...
  6. Let closure be a new Abstract Closure with no parameters that captures
     iterated and mapper and performs the following steps when called:
    ...
    b. Repeat,
      i. Let value be ? IteratorStepValue(iterated).
      ...
      viii. Repeat, while innerAlive is true,
        1. Let innerValue be Completion(IteratorStepValue(innerIterator)).
        ...
features: [iterator-helpers]
---*/

var counter = 0;
var innerCounter = 0;

var underlying = {
  next() {
    assert.sameValue(arguments.length, 0);

    return {
      done: false,
      value: ++counter,
    };
  }
};

var inner = {
  [Symbol.iterator]() {
    return this;
  },
  next() {
    assert.sameValue(arguments.length, 0);

    return {
      done: false,
      value: ++innerCounter,
    };
  }
};

var it = Iterator.prototype.flatMap.call(underlying, function(v) {
  return inner;
});

assert.sameValue(counter, 0);
assert.sameValue(innerCounter, 0);

assert.sameValue(it.next().value, 1);
assert.sameValue(it.next(1).value, 2);
assert.sameValue(it.next(1, 2).value, 3);

assert.sameValue(counter, 1);
assert.sameValue(innerCounter, 3);
