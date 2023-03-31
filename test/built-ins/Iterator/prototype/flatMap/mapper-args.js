// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap mapper is passed the yielded value and a counter as arguments
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
function* g() {
  yield 'a';
  yield 'b';
  yield 'c';
}

let assertionCount = 0;
let iter = g().flatMap((v, count) => {
  switch (v) {
    case 'a':
      assert.sameValue(count, 0);
      break;
    case 'b':
      assert.sameValue(count, 1);
      break;
    case 'c':
      assert.sameValue(count, 2);
      break;
    default:
      throw new Error;
  }
  ++assertionCount;
  return [v];
});

assert.sameValue(assertionCount, 0);

for (let i of iter);

assert.sameValue(assertionCount, 3);
