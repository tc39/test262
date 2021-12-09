// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed returns a new array even if it has zero or one elements
features: [change-array-by-copy]
---*/

var zero = [];
var zeroReversed = zero.toReversed();
assert.notSameValue(zero, zeroReversed);
assert.deepEqual(zero, zeroReversed);

var one = [1];
var oneReversed = one.toReversed();
assert.notSameValue(one, oneReversed);
assert.deepEqual(one, oneReversed);
