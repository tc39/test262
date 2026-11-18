// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.flatmap
description: >
  Gets the next method from the inner iterator only once
info: |
  %Iterator.prototype%.flatMap ( mapper )

  [...]
  6. Let closure be a new Abstract Closure with no parameters that captures
     iterated and mapper and performs the following steps when called:
    [...]
    b. Repeat,
      [...]
      v. Let innerIterator be Completion(GetIteratorFlattenable(mapped,
         reject-primitives)).
      [...]
      viii. Repeat, while innerAlive is true,
        1. Let innerValue be Completion(IteratorStepValue(innerIterator)).
        [...]

  GetIteratorFlattenable ( obj, primitiveHandling )

  [...]
  6. Return ? GetIteratorDirect(iterator).

  GetIteratorDirect ( obj )

  1. Let nextMethod be ? Get(obj, "next").
  [...]
features: [iterator-helpers]
flags: []
---*/
let nextGets = 0;
let count = 0;

let innerIterator = {
  get next() {
    ++nextGets;
    return function () {
      return {
        done: false,
        value: ++count,
      };
    };
  },
};

let iterator = [0].values().flatMap(() => innerIterator);

iterator.next();
assert.sameValue(nextGets, 1);

iterator.next();
assert.sameValue(nextGets, 1, "next is not read again on the second step");
