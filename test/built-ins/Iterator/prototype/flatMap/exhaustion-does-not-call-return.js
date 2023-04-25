// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator return is not called when result iterator is exhausted
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: []
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

let iterator = new TestIterator().flatMap(() => []);
iterator.next();
iterator.next();
iterator.next();
