// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Array-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var array = [];
array[2**31 - 2] = "INT32_MAX - 1";
array[2**31 - 1] = "INT32_MAX";
array[2**31 - 0] = "INT32_MAX + 1";
array[2**32 - 2] = "UINT32_MAX - 1";
array[2**32 - 1] = "UINT32_MAX";
array[2**32 - 0] = "UINT32_MAX + 1";

// var copy = array.slice();
// assert.sameValue(copy[2**31 - 2], "INT32_MAX - 1");
// assert.sameValue(copy[2**31 - 1], "INT32_MAX");
// assert.sameValue(copy[2**31 - 0], "INT32_MAX + 1");
// assert.sameValue(copy[2**32 - 2], "UINT32_MAX - 1");
// assert.sameValue(copy[2**32 - 1], undefined);
// assert.sameValue(copy[2**32 - 0], undefined);

