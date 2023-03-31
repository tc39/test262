// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap returns an empty iterator when the iterator has already been exhausted
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([]);

let {value, done} = iterator.next();
assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');

iterator = iterator.flatMap(x => [x]);
({value, done} = iterator.next());
assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
