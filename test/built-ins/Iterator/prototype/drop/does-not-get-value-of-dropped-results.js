// Copyright (C) 2026 MooGoong Lee. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.prototype.drop
description: >
  The "value" property of the dropped iterator results is not read
info: |
  %Iterator.prototype%.drop ( limit )

  [...]
  11. Let closure be a new Abstract Closure with no parameters that captures
      iterated and intLimit and performs the following steps when called:
    a. Let remaining be 𝔽(intLimit).
    b. Repeat, while remaining > +0𝔽,
      i. Set remaining to remaining - 1𝔽.
      ii. Let next be ? IteratorStep(iterated).
      iii. If next is done, return ReturnCompletion(undefined).
    c. Repeat,
      i. Let value be ? IteratorStepValue(iterated).
      [...]
includes: [compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let valueGets = [];

class TestIterator extends Iterator {
  constructor(length) {
    super();
    this.count = 0;
    this.length = length;
  }
  next() {
    let n = ++this.count;
    if (n > this.length) {
      return {
        done: true,
        value: undefined,
      };
    }
    return {
      done: false,
      get value() {
        valueGets.push(n);
        return n;
      },
    };
  }
}

let iterator = new TestIterator(3).drop(2);

assert.compareArray(valueGets, []);

let result = iterator.next();
assert.sameValue(result.value, 3);
assert.sameValue(result.done, false);
assert.compareArray(valueGets, [3], "only the value of the first non-dropped result is read");

// The underlying iterator is exhausted while dropping.
valueGets = [];
iterator = new TestIterator(2).drop(3);

result = iterator.next();
assert.sameValue(result.value, undefined);
assert.sameValue(result.done, true);
assert.compareArray(valueGets, [], "no value is read when all results are dropped");
