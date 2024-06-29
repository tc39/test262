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

var BUGNUMBER = 1076588;
var summary = "Object.freeze() should return its argument with no conversion when the argument is a primitive value";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.freeze(), undefined);
assert.sameValue(Object.freeze(undefined), undefined);
assert.sameValue(Object.freeze(null), null);
assert.sameValue(Object.freeze(1), 1);
assert.sameValue(Object.freeze("foo"), "foo");
assert.sameValue(Object.freeze(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.freeze(Symbol.for("foo")), Symbol.for("foo"));
}

