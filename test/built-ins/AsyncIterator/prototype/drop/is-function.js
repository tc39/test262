// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.drop
description: >
  AsyncIterator.prototype.drop is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator.prototype.drop, 'function', 'The value of `typeof AsyncIterator.prototype.drop` is "function"');
