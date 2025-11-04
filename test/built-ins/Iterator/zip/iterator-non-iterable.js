// Copyright (C) 2025 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-iterator.zip
description: >
  Throws a TypeError when the "iterables" argument is not iterable.
features: [joint-iteration]
---*/

// Throws a TypeError for invalid iterables values.
assert.throws(TypeError, function() {
  Iterator.zip(Object.create(null));
});
