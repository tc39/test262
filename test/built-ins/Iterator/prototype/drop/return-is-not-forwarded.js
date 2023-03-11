// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator return is never called when result iterator is closed
info: |
  %Iterator.prototype%.drop ( limit )

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

let iterator = new TestIterator().drop(0);
iterator.return();

iterator = new TestIterator().drop(1);
iterator.return();
