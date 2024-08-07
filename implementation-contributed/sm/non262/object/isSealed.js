// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-object-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//*
 * Any copyright is dedicated to the Public Domain.
 * https://creativecommons.org/publicdomain/zero/1.0/
 */

var BUGNUMBER = 1062860;
var summary = "Object.isSealed() should return true when given primitive values as input";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.isSealed(), true);
assert.sameValue(Object.isSealed(undefined), true);
assert.sameValue(Object.isSealed(null), true);
assert.sameValue(Object.isSealed(1), true);
assert.sameValue(Object.isSealed("foo"), true);
assert.sameValue(Object.isSealed(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.isSealed(Symbol()), true);
}

