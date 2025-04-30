// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes: [sm/non262.js, sm/non262-shell.js]
flags:
  - noStrict
description: |
  Constant folder should fold labeled statements
esid: pending
---*/

if (typeof disassemble === "function") {
    var code = disassemble(() => { x: 2+2; });

    if (typeof assert.sameValue === "function")
        assert.sameValue(true, /Int8 4/.test(code));
}

