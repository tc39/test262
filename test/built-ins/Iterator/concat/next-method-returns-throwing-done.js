// Copyright (C) 2024 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.concat
description: >
  Underlying iterator next returns object with throwing done getter
info: |
  Iterator.concat ( ...items )

  ...
  3. Let closure be a new Abstract Closure with no parameters that captures iterables and performs the following steps when called:
    a. For each Record iterable of iterables, do
      ...
      v. Repeat, while innerAlive is true,
        1. Let innerValue be ? IteratorStepValue(iteratorRecord).
        ...
features: [iterator-sequencing]
---*/

var returnMethodCalled = false;

let throwingIterator = {
  next() {
    return {
      get done() {
        throw new Test262Error();
      },
      value: 1,
    };
  },
  return() {
    returnMethodCalled = true;
    throw new Error();
  }
};

let iterable = {
  [Symbol.iterator]() {
    return throwingIterator;
  }
};

let iterator = Iterator.concat(iterable);

assert.throws(Test262Error, function() {
  iterator.next();
});

assert.sameValue(returnMethodCalled, false, "an iterator's return method is not called when its next method returns an object with throwy getters");
