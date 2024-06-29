// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Reflect-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

// Reflect.getPrototypeOf returns an object's prototype.
assert.sameValue(Reflect.getPrototypeOf({}), Object.prototype);
assert.sameValue(Reflect.getPrototypeOf(Object.prototype), null);
assert.sameValue(Reflect.getPrototypeOf(Object.create(null)), null);

var proxy = new Proxy({}, {
    getPrototypeOf(t) { return Math; }
});

assert.sameValue(Reflect.getPrototypeOf(proxy), Math);

// For more Reflect.getPrototypeOf tests, see target.js.

