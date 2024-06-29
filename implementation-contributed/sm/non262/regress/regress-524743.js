// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  hang
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

if (typeof gczeal != 'undefined' && typeof gc != 'undefined') {
    try
    {
        gczeal(2);
        var obj = {};
        for (var i = 0; i < 50; i++) {
            obj["_" + i] = 0;
            gc();
        }
    }
    catch(ex)
    {
    }
    gczeal(0);
}
assert.sameValue("no assertion failure", "no assertion failure", "bug 524743");
