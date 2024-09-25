// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Underlying iterator return is not called when result iterator is exhausted
info: |
  %Iterator.prototype%.flatMap ( mapper )

features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 0;
  yield 1;
  yield 2;
}

class TestIterator extends Iterator {
  get next() {
    let n = g();
    return function() {
      return n.next();
    };
  }
  return() {
    throw new Test262Error();
  }
}

let iterator = new TestIterator().flatMap(() => []);
iterator.next();
iterator.next();
iterator.next();
