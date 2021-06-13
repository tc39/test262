// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.filter
description: >
  AsyncIterator.prototype.filter is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator.prototype.filter, 'function', 'The value of `typeof AsyncIterator.prototype.filter` is "function"');
