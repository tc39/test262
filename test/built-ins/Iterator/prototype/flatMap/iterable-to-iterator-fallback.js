// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.flatMap
description: >
  Iterator.prototype.flatMap falls back to treating mapper return values as iterators if the Symbol.iterator property is not callable
info: |
  %Iterator.prototype%.flatMap ( mapper )

includes: [iterators.js, compareArray.js]
features: [iterator-helpers]
flags: []
---*/

function* g() {
  yield 0;
}

function* h() {
  yield 0;
  yield 1;
  yield 2;
}

let iter = g().flatMap(v => {
  let n = h();
  return {
    [Symbol.iterator]: 0,
    next: () => n.next()
  };
});

assert.compareArray(Array.from(iter), [0, 1, 2]);
