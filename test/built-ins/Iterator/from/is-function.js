// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iterator.from
description: >
  Iterator.from is a built-in function
features: [iterator-helpers]
---*/

assert.sameValue(typeof Iterator.from, 'function', 'The value of `typeof Iterator.from` is "function"');
