// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/var itemsPoisonedSymbolIterator = {};
itemsPoisonedSymbolIterator[Symbol.iterator] = function() {
  throw new RangeError();
};

assertThrowsInstanceOf(function() {
  Tuple.from(itemsPoisonedSymbolIterator);
}, RangeError, 'Tuple.from(itemsPoisonedSymbolIterator) throws');

