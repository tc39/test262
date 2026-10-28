// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A` matches start of buffer in v-mode.
info: |
  Runtime Semantics: CompileAssertion
  
  Assertion :: \A
    1. Return a new Matcher with parameters (matchState, continue) that captures nothing and performs the following steps when called:
      a. Assert: matchState is a MatchState.
      b. Assert: continue is a MatcherContinuation.
      c. Let e be matchState.[[EndIndex]].
      d. If e = 0, return continue(matchState).
      e. Return ~failure~.

esid: sec-patterns
features: [regexp-buffer-boundaries, regexp-lookbehind, regexp-v-flag]
---*/

assert(/\Ax/v.test("x"), "Expected \\A to match start-of-buffer outside of multiline mode (literal)");
assert(/\Ax/vm.test("x"), "Expected \\A to match start-of-buffer inside of multiline mode (literal)");
assert(!/\Ax/v.test("yx"), "Expected \\A to not match when not at start-of-buffer outside of multiline mode (literal)");
assert(!/\Ax/vm.test("yx"), "Expected \\A to not match when not at start-of-buffer inside of multiline mode (literal)");
assert(!/\Ax/v.test("\nx"), "Expected \\A to not match when at start-of-new-line outside of multiline mode (literal)");
assert(!/\Ax/vm.test("\nx"), "Expected \\A to not match when at start-of-new-line inside of multiline mode (literal)");

assert(new RegExp("\\Ax", "v").test("x"), "Expected \\A to match start-of-buffer outside of multiline mode (constructed)");
assert(new RegExp("\\Ax", "vm").test("x"), "Expected \\A to match start-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "v").test("yx"), "Expected \\A to not match when not at start-of-buffer outside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "vm").test("yx"), "Expected \\A to not match when not at start-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "v").test("\nx"), "Expected \\A to not match when at start-of-new-line outside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "vm").test("\nx"), "Expected \\A to not match when at start-of-new-line inside of multiline mode (constructed)");

assert(/\A/v.test(""), "Expected \\A to match empty input");
assert.sameValue(/\A/v.exec("")[0], "", "Expected \\A to match empty string in empty input");

assert.sameValue(/\Ax/v.exec("x")[0], "x", "Expected \\A to be zero-width");
assert.sameValue(/\A/v.exec("xy").index, 0, "Expected \\A to match at start-of-buffer");

assert(/(?=\Ax)/v.test("x"), "Expected \\A in lookahead to match at start-of-buffer");
assert(!/x(?=\A)/v.test("xx"), "Expected \\A in lookahead to not match when not at start-of-buffer");
assert(/(?<=\A)x/v.test("x"), "Expected \\A in lookbehind to match at start-of-buffer");
assert(!/(?<=\A)x/v.test("yx"), "Expected \\A in lookbehind to not match when not at start-of-buffer");
assert(!/(?<=\A)x/vm.test("\nx"), "Expected \\A in lookbehind to not match at start-of-new-line inside of multiline mode");
assert(/(?<=\Ay)x/v.test("yx"), "Expected \\A in lookbehind to match at start-of-buffer before other characters");
assert(!/(?<=\Ay)x/v.test("zyx"), "Expected \\A in lookbehind to not match when not at start-of-buffer before other characters");
assert.sameValue(/(?<!\A)x/v.exec("xx").index, 1, "Expected \\A in negative lookbehind to not match at start-of-buffer");

var re = /\Ax/vy;
re.lastIndex = 1;
assert(!re.test("xx"), "Expected \\A to not match at a non-zero lastIndex with the sticky flag");
re.lastIndex = 0;
assert(re.test("xx"), "Expected \\A to match at a zero lastIndex with the sticky flag");

re = /\Ax/vmy;
re.lastIndex = 2;
assert(!re.test("x\nx"), "Expected \\A to not match at a non-zero lastIndex at start-of-new-line with the sticky flag inside of multiline mode");

re = /(?<=\Ax)x/vy;
re.lastIndex = 1;
assert(re.test("xx"), "Expected \\A in lookbehind to match at a non-zero lastIndex with the sticky flag");

re = /\Ax/vg;
re.lastIndex = 1;
assert(!re.test("xx"), "Expected \\A to not match after a non-zero lastIndex with the global flag");
assert.sameValue("xx".replace(/\Ax/vg, "y"), "yx", "Expected \\A to match only once with the global flag");
assert.sameValue("x\nx".replace(/\Ax/vmg, "y"), "y\nx", "Expected \\A to match only once with the global flag inside of multiline mode");
