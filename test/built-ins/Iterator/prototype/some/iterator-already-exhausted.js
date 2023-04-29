// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.some
description: >
  Iterator.prototype.some returns true when the iterator has already been exhausted
info: |
  %Iterator.prototype%.some ( predicate )

features: [iterator-helpers]
flags: []
---*/
let iterator = function*(){}();

let {value, done} = iterator.next();
assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');

let result = iterator.some(() => true);
assert.sameValue(result, false, 'The value of `result` is true');

result = iterator.some(() => false);
assert.sameValue(result, false, 'The value of `result` is true');
