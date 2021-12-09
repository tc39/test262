// Copyright (C) 2021 Igalia. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.toReversed
description: >
  Array.prototype.toReversed throws if the receiver is null or undefined
info: |
  Array.prototype.toReversed ( )

  1. Let O be ? ToObject(this value).
  2. Let len be ? LengthOfArrayLike(O).
  ...
features: [change-array-by-copy]
---*/

assert.deepEqual(Array.prototype.toReversed.call(true), []);
assert.deepEqual(Array.prototype.toReversed.call(false), []);
