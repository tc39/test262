// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\z` (lower-case z) matches end of buffer in u-mode.
info: |
  Runtime Semantics: CompileAssertion
  
  Assertion :: \z
    1. Return a new Matcher with parameters (matchState, continue) that captures nothing and performs the following steps when called:
      a. Assert: matchState is a MatchState.
      b. Assert: continue is a MatcherContinuation.
      c. Let input be matchState.[[Input]].
      d. Let e be matchState.[[EndIndex]].
      e. Let inputLength be the number of elements in input.
      f. If e = inputLength, return continue(matchState).
      g. Return failure.

esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

assert(/x\z/u.test("x"), "Expected \\z to match end-of-buffer outside of multiline mode (literal)");
assert(/x\z/um.test("x"), "Expected \\z to match end-of-buffer inside of multiline mode (literal)");
assert(!/x\z/u.test("xy"), "Expected \\z to not match when not at end-of-buffer outside of multiline mode (literal)");
assert(!/x\z/um.test("xy"), "Expected \\z to not match when not at end-of-buffer inside of multiline mode (literal)");
assert(!/x\z/u.test("x\n"), "Expected \\z to not match when only at end-of-line outside of multiline mode (literal)");
assert(!/x\z/um.test("x\n"), "Expected \\z to not match when only at end-of-line inside of multiline mode (literal)");

assert(new RegExp("x\\z", "u").test("x"), "Expected \\z to match end-of-buffer outside of multiline mode (constructed)");
assert(new RegExp("x\\z", "um").test("x"), "Expected \\z to match end-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "u").test("xy"), "Expected \\z to not match when not at end-of-buffer outside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "um").test("xy"), "Expected \\z to not match when not at end-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "u").test("x\n"), "Expected \\z to not match when only at end-of-line outside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "um").test("x\n"), "Expected \\z to not match when only at end-of-line inside of multiline mode (constructed)");
