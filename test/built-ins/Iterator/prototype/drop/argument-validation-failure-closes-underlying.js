// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Underlying iterator is closed when argument validation fails
info: |
  %Iterator.prototype%.drop ( limit )

features: [iterator-helpers]
flags: []
---*/

let closed = false;
let closable = {
  __proto__: Iterator.prototype,
  get next() {
    throw new Test262Error('next should not be read');
  },
  return() {
    closed = true;
  },
};

assert.throws(RangeError, function() {
  closable.drop();
});
assert.sameValue(closed, true);

closed = false;
assert.throws(RangeError, function() {
  closable.drop(NaN);
});
assert.sameValue(closed, true);

closed = false;
assert.throws(RangeError, function() {
  closable.drop(-1);
});
assert.sameValue(closed, true);

closed = false;
assert.throws(Test262Error, function() {
  closable.drop({ get valueOf() { throw new Test262Error(); }});
});
assert.sameValue(closed, true);
