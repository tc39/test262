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
---*/var toReversed = Tuple.prototype.toReversed;

assert.sameValue(typeof toReversed, 'function');

assertThrowsInstanceOf(function() {
  toReversed();
}, TypeError, "toReversed() invoked as function");

