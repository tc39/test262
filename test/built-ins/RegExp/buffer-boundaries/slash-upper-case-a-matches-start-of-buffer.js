// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A` matches start of buffer in any unicode mode.
info: |
  Runtime Semantics: CompileAssertion
  
  Assertion :: \A
    1. Return a new Matcher with parameters (x, c) that captures nothing and performs the following steps when called:
      a. Assert: x is a MatchState.
      b. Assert: c is a MatcherContinuation.
      c. Let e be x.[[EndIndex]].
      d. If e = 0, return c(x).
      e. Return ~failure~.

esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

assert(/\Ax/u.test("x"), "Expected \\A to match the start of the buffer outside of multiline mode");
assert(/\Ax/um.test("x"), "Expected \\A to match the start of the buffer inside of multiline mode");
assert(!/\Ax/u.test("yx"), "Expected \\A to not match when not at the start of the buffer outside of multiline mode");
assert(!/\Ax/um.test("yx"), "Expected \\A to not match when not at the start of the buffer inside of multiline mode");
assert(!/\Ax/u.test("y\nx"), "Expected \\A to not match when at the start of a new line outside of multiline mode");
assert(!/\Ax/um.test("y\nx"), "Expected \\A to not match when at the start of a new line inside of multiline mode");

assert(/\Ax/v.test("x"), "Expected \\A to match the start of the buffer outside of multiline mode");
assert(/\Ax/vm.test("x"), "Expected \\A to match the start of the buffer inside of multiline mode");
assert(!/\Ax/v.test("yx"), "Expected \\A to not match when not at the start of the buffer outside of multiline mode");
assert(!/\Ax/vm.test("yx"), "Expected \\A to not match when not at the start of the buffer inside of multiline mode");
assert(!/\Ax/v.test("y\nx"), "Expected \\A to not match when at the start of a new line outside of multiline mode");
assert(!/\Ax/vm.test("y\nx"), "Expected \\A to not match when at the start of a new line inside of multiline mode");

assert(new RegExp("\\Ax", "u").test("x"), "Expected \\A to match the start of the buffer outside of multiline mode");
assert(new RegExp("\\Ax", "um").test("x"), "Expected \\A to match the start of the buffer inside of multiline mode");
assert(!new RegExp("\\Ax", "u").test("yx"), "Expected \\A to not match when not at the start of the buffer outside of multiline mode");
assert(!new RegExp("\\Ax", "um").test("yx"), "Expected \\A to not match when not at the start of the buffer inside of multiline mode");
assert(!new RegExp("\\Ax", "u").test("y\nx"), "Expected \\A to not match when at the start of a new line outside of multiline mode");
assert(!new RegExp("\\Ax", "um").test("y\nx"), "Expected \\A to not match when at the start of a new line inside of multiline mode");

assert(new RegExp("\\Ax", "v").test("x"), "Expected \\A to match the start of the buffer outside of multiline mode");
assert(new RegExp("\\Ax", "vm").test("x"), "Expected \\A to match the start of the buffer inside of multiline mode");
assert(!new RegExp("\\Ax", "v").test("yx"), "Expected \\A to not match when not at the start of the buffer outside of multiline mode");
assert(!new RegExp("\\Ax", "vm").test("yx"), "Expected \\A to not match when not at the start of the buffer inside of multiline mode");
assert(!new RegExp("\\Ax", "v").test("y\nx"), "Expected \\A to not match when at the start of a new line outside of multiline mode");
assert(!new RegExp("\\Ax", "vm").test("y\nx"), "Expected \\A to not match when at the start of a new line inside of multiline mode");
