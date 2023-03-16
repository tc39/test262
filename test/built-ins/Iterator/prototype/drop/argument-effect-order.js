// Copyright (C) 2023 Michael Ficarra. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.drop
description: >
  Arguments and this value are evaluated in the correct order
info: |
  %Iterator.prototype%.drop ( limit )

includes: [iterators.js, compareArray.js]
features: [iterator-helpers]
flags: []
---*/
let effects = [];

Iterator.prototype.drop.call(
  {
    get next() {
      effects.push('get next');
      return function() {
        return { done: true, value: undefined };
      };
    }
  },
  {
    valueOf() {
      effects.push('ToNumber limit');
      return 0;
    }
  }
);

assert.compareArray(effects, [
  'get next',
  'ToNumber limit'
]);
