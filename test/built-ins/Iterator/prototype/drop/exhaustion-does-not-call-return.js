// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator return is not called when result iterator is exhausted
info: |
  %Iterator.prototype%.drop ( limit )

    6.b.ii. Let next be ? IteratorStep(iterated).
    6.b.iii. If next is false, return undefined.
  6.c. Repeat,
    6.c.i. Let next be ? IteratorStep(iterated).
    6.c.ii. If next is false, return undefined.

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class TestIterator extends Iterator {
  constructor() {
    super();
    this._remaining = 3;
  }
  next() {
    if (this._remaining > 0) {
      return {
        done: false,
        value: this._remaining--
      };
    } else {
      return {
        done: true,
        value: undefined
      };
    }
  }
  return() {
    if (this._remaining <= 0) {
      throw new Test262Error;
    }
    return {};
  }
}

let iterator = new TestIterator;
iterator = iterator.drop(0);
iterator.next();
iterator.next();
iterator.next();
iterator.next();
iterator.next();

iterator = new TestIterator;
iterator = iterator.drop(1);
iterator.next();
iterator.next();
iterator.next();
iterator.next();

iterator = new TestIterator;
iterator = iterator.drop(1).drop(1).drop(1).drop(1).drop(1);
iterator.next();
iterator.next();

iterator = new TestIterator;
iterator = iterator.drop(10);
iterator.next();
iterator.next();
