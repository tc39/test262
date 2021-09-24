// Copyright (C) 2019 Alexey Shvayka. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  compareArray uses SameValue for value comparison.
includes: [compareArray.js]
---*/

assert.compareArray([NaN], [NaN], '[NaN] is expected to be [NaN]');
assert.throws(Test262Error, () => {
  assert.compareArray([0], [-0], '[0] is expected to be [-0]');
}, 'assert.compareArray([0], [-0]) throws a Test262Error exception');
