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

var BUGNUMBER = 1071464;
var summary = "Object.isFrozen() should return true when given primitive values as input";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.isFrozen(), true);
assert.sameValue(Object.isFrozen(undefined), true);
assert.sameValue(Object.isFrozen(null), true);
assert.sameValue(Object.isFrozen(1), true);
assert.sameValue(Object.isFrozen("foo"), true);
assert.sameValue(Object.isFrozen(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.isFrozen(Symbol()), true);
}

