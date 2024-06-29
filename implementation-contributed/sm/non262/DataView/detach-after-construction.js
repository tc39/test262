// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- detachArrayBuffer.js
- non262-DataView-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/var buf = new ArrayBuffer([1,2]);
var bufView = new DataView(buf);

$DETACHBUFFER(buf);

assertThrowsInstanceOf(() => bufView.getInt8(0), TypeError);

