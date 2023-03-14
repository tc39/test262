// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every coerces predicate return value to boolean
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
function* g() {
  for (let i = 4; i >= 0; --i) {
    yield i;
  }
}

let iter = g();

let predicateCalls = 0;
let result = iter.every(v => {
  ++predicateCalls;
  return v;
});

assert.sameValue(result, false, 'The value of `result` is false');
assert.sameValue(predicateCalls, 5);
