// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  returns false if the element is not found
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
esid: pending
---*/

assert.sameValue(#[42].includes(43), false, "43");

assert.sameValue(#["test262"].includes("test"), false, "string");

assert.sameValue(#[0, "test262", undefined].includes(""), false, "the empty string");

assert.sameValue(#["true", false].includes(true), false, "true");
assert.sameValue(#["", true].includes(false), false, "false");

assert.sameValue(#[undefined, false, 0, 1].includes(null), false, "null");
assert.sameValue(#[null].includes(undefined), false, "undefined");

assert.sameValue(#[Symbol("1")].includes(Symbol("1")), false, "symbol");

var sample = #[42];
assert.sameValue(sample.includes(sample), false, "this");

