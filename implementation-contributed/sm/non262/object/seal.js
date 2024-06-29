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

var BUGNUMBER = 1075294;
var summary = "Object.seal() should return its argument with no conversion when the argument is a primitive value";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.seal(), undefined);
assert.sameValue(Object.seal(undefined), undefined);
assert.sameValue(Object.seal(null), null);
assert.sameValue(Object.seal(1), 1);
assert.sameValue(Object.seal("foo"), "foo");
assert.sameValue(Object.seal(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.seal(Symbol.for("foo")), Symbol.for("foo"));
}

