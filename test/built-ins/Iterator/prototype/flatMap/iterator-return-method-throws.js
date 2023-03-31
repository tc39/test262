// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator has throwing return
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class Test262IteratorThrows extends Test262Iterator {
  return() {
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]).flatMap(() => []);

assert.throws(Test262Error, function() {
  iterator.return();
});
