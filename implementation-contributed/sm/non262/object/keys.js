// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
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

var BUGNUMBER = 1038545;
var summary = "Coerce the argument passed to Object.keys using ToObject";
print(BUGNUMBER + ": " + summary);

assertThrowsInstanceOf(() => Object.keys(), TypeError);
assertThrowsInstanceOf(() => Object.keys(undefined), TypeError);
assertThrowsInstanceOf(() => Object.keys(null), TypeError);

assert.deepEqual(Object.keys(1), []);
assert.deepEqual(Object.keys(true), []);
if (typeof Symbol === "function") {
    assert.deepEqual(Object.keys(Symbol("foo")), []);
}

assert.deepEqual(Object.keys("foo"), ["0", "1", "2"]);

