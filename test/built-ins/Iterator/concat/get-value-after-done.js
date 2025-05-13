// Copyright (C) 2025 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.concat
description: >
  Iterator.concat accesses the value of a done IteratorResult, matching the behaviour of yield*
info: |
  Iterator.concat ( ...items )

  ...
  3. Let closure be a new Abstract Closure with no parameters that captures iterables and performs the following steps when called:
    a. For each Record iterable of iterables, do
      ...
      v. Repeat, while innerAlive is true,
        1. Let iteratorResult be ? IteratorNext(iteratorRecord).
        2. Let done be Completion(IteratorComplete(iteratorResult)).
        3. If done is a throw completion, then
          a. Set iteratorRecord.[[Done]] to true.
          b. Return ? done.
        4. Set done to ! done.
        5. If done is true, then
          a. Set iteratorRecord.[[Done]] to true.
          b. Perform ? IteratorValue(iteratorResult).
          ...
features: [iterator-sequencing]
---*/

let valueAccesses = 0;
let iter = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          get value() {
            ++valueAccesses;
          },
          done: true,
        };
      },
    };
  }
};

Array.from(function*() { yield* iter; }());

assert.sameValue(valueAccesses, 1, 'yield* accesses value getter after done');

Array.from(Iterator.concat(iter, iter, iter));

assert.sameValue(valueAccesses, 4, 'Iterator.concat also accesses value getter after each iterator is done');
