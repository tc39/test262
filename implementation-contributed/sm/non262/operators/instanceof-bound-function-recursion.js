// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-operators-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/function f() {}

var fn = f;
for (var i = 0; i < 100000; ++i) {
  fn = fn.bind();

  // Ensure we don't fallback to @@hasInstance from %FunctionPrototype%.
  Object.defineProperty(fn, Symbol.hasInstance, {
    value: undefined, writable: true, enumerable: true, writable: true
  });

  // Prevent generating overlong names of the form "bound bound bound [...] f".
  Object.defineProperty(fn, "name", {
    value: "", writable: true, enumerable: true, writable: true
  });
}

assertThrowsInstanceOf(
  () => ({}) instanceof fn,
  Error,
  "detect runaway recursion delegating instanceof to bound function target");

