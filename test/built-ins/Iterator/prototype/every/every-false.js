// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every returns false when the predicate returns false
info: |

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([1, 2]);
let result = iterator.every(value => !value);

assert.sameValue(result, false, 'The value of `result` is false');

let {value, done} = iterator.next();

assert.sameValue(value, 2, 'The value of `value` is 2');
assert.sameValue(done, false, 'The value of `done` is false');
