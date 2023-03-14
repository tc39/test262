// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every returns true when the iterator has already been exhausted
info: |
  %Iterator.prototype%.every ( predicate )

  4.a. Let next be ? IteratorStep(iterated).
  4.b. If next is false, return true.

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([]);

let {value, done} = iterator.next();
assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');

let result = iterator.every(() => true);
assert.sameValue(result, true, 'The value of `result` is true');

result = iterator.every(() => false);
assert.sameValue(result, true, 'The value of `result` is true');
