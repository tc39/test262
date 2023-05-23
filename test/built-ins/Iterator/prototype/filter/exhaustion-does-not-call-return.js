// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Underlying iterator return is not called when result iterator is exhausted
info: |
  %Iterator.prototype%.filter ( predicate )

  3.b.i. Let next be ? IteratorStep(iterated).
  3.b.ii. If next is false, return undefined.

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
        value: this._remaining--,
      };
    } else {
      return {
        done: true,
        value: undefined,
      };
    }
  }
  return() {
    if (this._remaining <= 0) {
      throw new Test262Error();
    }
    return {};
  }
}

let iterator = new TestIterator().filter(() => false);
iterator.next();
iterator.next();
iterator.next();
