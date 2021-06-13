// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.every
description: >
  AsyncIterator.prototype.every is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator.prototype.every, 'function', 'The value of `typeof AsyncIterator.prototype.every` is "function"');
