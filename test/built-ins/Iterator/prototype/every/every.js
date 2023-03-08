// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every returns true when the predicate returns false
info: |
  %Iterator.prototype%.every ( fn )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([1, 2]);
let result = iterator.every(value => !!value);

assert.sameValue(result, true, 'The value of `result` is true');

let {value, done} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
