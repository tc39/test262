// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.filter
description: >
  Returns abrupt when callback call is abrupt. Closes iterator
info: |
  %Iterator.prototype%.filter ( filterer )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/

let callbackCount = 0;
let iterator = new Test262Iterator([1, 2]).filter(() => {
  callbackCount++;
  throw new Test262Error();
});

assert.throws(Test262Error, function () {
  iterator.next();
});

assert.sameValue(callbackCount, 1, 'The value of `callbackCount` is 1');

let {value, done} = iterator.next();

assert.sameValue(value, undefined, 'The value of `value` is expected to equal `undefined`');
assert.sameValue(done, true, 'The value of `done` is true');
