// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator has throwing return getter
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
class Test262IteratorThrows extends Test262Iterator {
  get return() {
    throw new Test262Error();
  }
}

let iterator = new Test262IteratorThrows([1, 2]);

assert.throws(Test262Error, function() {
  iterator.every(() => false);
});
