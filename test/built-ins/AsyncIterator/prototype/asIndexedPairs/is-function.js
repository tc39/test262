// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.asindexedpairs
description: >
  AsyncIterator.prototype.asIndexedPairs is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator.prototype.asIndexedPairs, 'function', 'The value of `typeof AsyncIterator.prototype.asIndexedPairs` is "function"');
