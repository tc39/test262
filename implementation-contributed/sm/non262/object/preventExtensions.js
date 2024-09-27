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

var BUGNUMBER = 1073446;
var summary = "Object.preventExtensions() should return its argument with no conversion when the argument is a primitive value";

print(BUGNUMBER + ": " + summary);
assert.sameValue(Object.preventExtensions(), undefined);
assert.sameValue(Object.preventExtensions(undefined), undefined);
assert.sameValue(Object.preventExtensions(null), null);
assert.sameValue(Object.preventExtensions(1), 1);
assert.sameValue(Object.preventExtensions("foo"), "foo");
assert.sameValue(Object.preventExtensions(true), true);
if (typeof Symbol === "function") {
    assert.sameValue(Object.preventExtensions(Symbol.for("foo")), Symbol.for("foo"));
}

