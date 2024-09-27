// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- detachArrayBuffer.js
- non262-TypedArray-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Ensure the fast-path when TypedArray.from is called with a TypedArray still
// checks for detached buffers.

var ta = new Int32Array(4);
$DETACHBUFFER(ta.buffer);

assertThrowsInstanceOf(() => Int32Array.from(ta), TypeError);

