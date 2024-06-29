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

var BUGNUMBER = 1079090;
var summary = "Coerce the argument passed to Object.getPrototypeOf using ToObject";
print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => Object.getPrototypeOf(), TypeError);
assertThrowsInstanceOf(() => Object.getPrototypeOf(undefined), TypeError);
assertThrowsInstanceOf(() => Object.getPrototypeOf(null), TypeError);

assert.sameValue(Object.getPrototypeOf(1), Number.prototype);
assert.sameValue(Object.getPrototypeOf(true), Boolean.prototype);
assert.sameValue(Object.getPrototypeOf("foo"), String.prototype);
if (typeof Symbol === "function") {
    assert.sameValue(Object.getPrototypeOf(Symbol("foo")), Symbol.prototype);
}

