// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Attempts to close iterator when predicate throws, but that throws
info: |
  %Iterator.prototype%.every ( predicate )

  4.d. Let result be Completion(Call(predicate, undefined, « value, 𝔽(counter) »)).
  4.e. IfAbruptCloseIterator(result, iterated).

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class TestIterator extends Iterator {
  next() {
    return {
      done: false,
      value: 1
    };
  }
  return() {
    throw new Error;
  }
}

let iterator = new TestIterator;

assert.throws(Test262Error, function() {
  iterator.every(() => {
    throw new Test262Error;
  });
});
