// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap mapper this value is undefined
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 0;
}

let iter = g();

let expectedThis = function(){ return this; }.call(undefined);

let assertionCount = 0;
iter = iter.flatMap(function (v, count) {
  assert.sameValue(this, expectedThis);
  ++assertionCount;
  return [v];
});

iter.next();
assert.sameValue(assertionCount, 1);
