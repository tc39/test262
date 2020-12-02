// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciteratorprototype.find
description: >
  AsyncIterator.prototype.find is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator.prototype.find, 'function', 'The value of `typeof AsyncIterator.prototype.find` is "function"');
