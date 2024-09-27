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

assert.sameValue(Object.hasOwn({}, "any"), false);
assertThrowsInstanceOf(() => Object.hasOwn(null, "any"), TypeError);

var x = { test: 'test value'}
var y = {}
var z = Object.create(x);

assert.sameValue(Object.hasOwn(x, "test"), true);
assert.sameValue(Object.hasOwn(y, "test"), false);
assert.sameValue(Object.hasOwn(z, "test"), false);

