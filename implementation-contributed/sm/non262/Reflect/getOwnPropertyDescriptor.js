// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- deepEqual.js
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

// Reflect.getOwnPropertyDescriptor inspects object properties.
assert.deepEqual(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "x"),
    {value: "hello", writable: true, enumerable: true, configurable: true});
assert.sameValue(
    Reflect.getOwnPropertyDescriptor({x: "hello"}, "y"),
    undefined);
assert.deepEqual(
    Reflect.getOwnPropertyDescriptor([], "length"),
    {value: 0, writable: true, enumerable: false, configurable: false});

// Reflect.getOwnPropertyDescriptor shares its implementation with
// Object.getOwnPropertyDescriptor. The only difference is how non-object
// targets are handled.
//
// For more Reflect.getOwnPropertyDescriptor tests, see target.js and propertyKeys.js.

