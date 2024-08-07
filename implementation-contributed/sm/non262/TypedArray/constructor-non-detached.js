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
features: []
description: |
  pending
esid: pending
---*/for (var constructor of typedArrayConstructors) {
    var buf = new constructor();
    $DETACHBUFFER(buf.buffer);
    assertThrowsInstanceOf(() => new constructor(buf), TypeError);

    var buffer = new ArrayBuffer();
    $DETACHBUFFER(buffer);
    assertThrowsInstanceOf(() => new constructor(buffer), TypeError);
}


