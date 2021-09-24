// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 14.1
description: >
    arrow functions
includes: [compareArray.js]
---*/
var fn = (a, b, ...c) => c;

assert.compareArray(fn(), [], 'fn() must return []');
assert.compareArray(fn(1, 2), [], 'fn(1, 2) must return []');
assert.compareArray(fn(1, 2, 3), [3], 'fn(1, 2, 3) must return [3]');
assert.compareArray(
  fn(1, 2, 3, 4),
  [3, 4],
  'fn(1, 2, 3, 4) must return [3, 4]'
);
assert.compareArray(
  fn(1, 2, 3, 4, 5),
  [3, 4, 5],
  'fn(1, 2, 3, 4, 5) must return [3, 4, 5]'
);
assert.compareArray(
  ((...args) => args)(),
  [],
  '((...args) => args)() must return []'
);
assert.compareArray(
  ((...args) => args)(1,2,3),
  [1,2,3],
  '((...args) => args)(1, 2, 3) must return [1,2,3]'
);
