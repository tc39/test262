// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-shell.js
- non262-strict-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */

/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/* Verify that GETTHISPROP does not update the frame's |this| slot. */

var f = String.prototype.m = function () {
    "use strict";
    assert.sameValue(this, "s");
    // The GETTHISPROP should not cause |this| to become wrapped.
    return [this.m, this];
};
var a = "s".m();
assert.sameValue(a[0], f);
assert.sameValue(a[1], "s");

