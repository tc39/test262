// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Map-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*//* Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/ */

let length;
let iterable = {
   [Symbol.iterator]() { return this; },
   next() { length = arguments.length; return {done: true}; }
};

new Map(iterable);
// ensure no arguments are passed to next() during construction (Bug 1197095)
assert.sameValue(length, 0);

let typeofThis;
Object.defineProperty(Number.prototype, Symbol.iterator, {
  value() {
    "use strict";
    typeofThis = typeof this;
    return { next() { return {done: true}; } };
  }
});

new Map(0);
// ensure that iterable objects retain their type (Bug 1197094)
assert.sameValue(typeofThis, "number");

