// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.flatmap
description: >
  The inner iterator is not closed when it is exhausted
info: |
  %Iterator.prototype%.flatMap ( mapper )

  [...]
  6. Let closure be a new Abstract Closure with no parameters that captures
     iterated and mapper and performs the following steps when called:
    [...]
    b. Repeat,
      [...]
      viii. Repeat, while innerAlive is true,
        1. Let innerValue be Completion(IteratorStepValue(innerIterator)).
        2. IfAbruptCloseIterator(innerValue, iterated).
        3. If innerValue is done, then
          a. Set innerAlive to false.
        4. Else,
          a. Let completion be Completion(Yield(innerValue)).
          b. If completion is an abrupt completion, then
            i. Let backupCompletion be Completion(IteratorClose(innerIterator,
               completion)).
            [...]
features: [iterator-helpers]
flags: []
---*/
let returnGets = 0;
let count = 0;

let innerIterator = {
  next() {
    if (++count > 1) {
      return {
        done: true,
        value: undefined,
      };
    }
    return {
      done: false,
      value: 1,
    };
  },
  get return() {
    ++returnGets;
    return function () {
      return {};
    };
  },
};

let iterator = [0].values().flatMap(() => innerIterator);

iterator.next();
let result = iterator.next();
assert.sameValue(result.done, true);
assert.sameValue(returnGets, 0, "return is not read when the inner iterator is exhausted");
