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
---*/var items = {};
items[Symbol.iterator] = function() {
  return {
    next: function() {
      throw new RangeError();
    }
  };
};

assertThrowsInstanceOf(function() {
  Tuple.from(items);
}, RangeError, 'Tuple.from(items) should throw');

