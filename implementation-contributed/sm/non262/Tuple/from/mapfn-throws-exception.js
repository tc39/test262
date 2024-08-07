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
---*/var array = [2, 4, 8, 16, 32, 64, 128];

function mapFnThrows(value, index, obj) {
  throw new RangeError();
}

assertThrowsInstanceOf(function() {
  Tuple.from(array, mapFnThrows);
}, RangeError, 'Tuple.from(array, mapFnThrows) throws');

