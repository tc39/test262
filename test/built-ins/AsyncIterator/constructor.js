// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynciterator-constructor
description: >
  The AsyncIterator constructor is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof AsyncIterator, 'function', 'The value of `typeof AsyncIterator` is "function"');
