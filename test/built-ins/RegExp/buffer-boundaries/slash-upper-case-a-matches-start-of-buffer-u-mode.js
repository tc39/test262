// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A` matches start of buffer in u-mode.
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
features: [regexp-buffer-boundaries, regexp-lookbehind]
---*/

assert(/\Ax/u.test("x"), "Expected \\A to match start-of-buffer outside of multiline mode (literal)");
assert(/\Ax/um.test("x"), "Expected \\A to match start-of-buffer inside of multiline mode (literal)");
assert(!/\Ax/u.test("yx"), "Expected \\A to not match when not at start-of-buffer outside of multiline mode (literal)");
assert(!/\Ax/um.test("yx"), "Expected \\A to not match when not at start-of-buffer inside of multiline mode (literal)");
assert(!/\Ax/u.test("\nx"), "Expected \\A to not match when at start-of-new-line outside of multiline mode (literal)");
assert(!/\Ax/um.test("\nx"), "Expected \\A to not match when at start-of-new-line inside of multiline mode (literal)");

assert(new RegExp("\\Ax", "u").test("x"), "Expected \\A to match start-of-buffer outside of multiline mode (constructed)");
assert(new RegExp("\\Ax", "um").test("x"), "Expected \\A to match start-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "u").test("yx"), "Expected \\A to not match when not at start-of-buffer outside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "um").test("yx"), "Expected \\A to not match when not at start-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "u").test("\nx"), "Expected \\A to not match when at start-of-new-line outside of multiline mode (constructed)");
assert(!new RegExp("\\Ax", "um").test("\nx"), "Expected \\A to not match when at start-of-new-line inside of multiline mode (constructed)");

assert(/\A/u.test(""), "Expected \\A to match empty input");
assert.sameValue(/\A/u.exec("")[0], "", "Expected \\A to match empty string in empty input");

assert.sameValue(/\Ax/u.exec("x")[0], "x", "Expected \\A to be zero-width");
assert.sameValue(/\A/u.exec("xy").index, 0, "Expected \\A to match at start-of-buffer");

assert(/(?=\Ax)/u.test("x"), "Expected \\A in lookahead to match at start-of-buffer");
assert(!/x(?=\A)/u.test("xx"), "Expected \\A in lookahead to not match when not at start-of-buffer");
assert(/(?<=\A)x/u.test("x"), "Expected \\A in lookbehind to match at start-of-buffer");
assert(!/(?<=\A)x/u.test("yx"), "Expected \\A in lookbehind to not match when not at start-of-buffer");
assert(!/(?<=\A)x/um.test("\nx"), "Expected \\A in lookbehind to not match at start-of-new-line inside of multiline mode");
assert(/(?<=\Ay)x/u.test("yx"), "Expected \\A in lookbehind to match at start-of-buffer before other characters");
assert(!/(?<=\Ay)x/u.test("zyx"), "Expected \\A in lookbehind to not match when not at start-of-buffer before other characters");
assert.sameValue(/(?<!\A)x/u.exec("xx").index, 1, "Expected \\A in negative lookbehind to not match at start-of-buffer");

var re = /\Ax/uy;
re.lastIndex = 1;
assert(!re.test("xx"), "Expected \\A to not match at a non-zero lastIndex with the sticky flag");
re.lastIndex = 0;
assert(re.test("xx"), "Expected \\A to match at a zero lastIndex with the sticky flag");

re = /\Ax/umy;
re.lastIndex = 2;
assert(!re.test("x\nx"), "Expected \\A to not match at a non-zero lastIndex at start-of-new-line with the sticky flag inside of multiline mode");

re = /(?<=\Ax)x/uy;
re.lastIndex = 1;
assert(re.test("xx"), "Expected \\A in lookbehind to match at a non-zero lastIndex with the sticky flag");

re = /\Ax/ug;
re.lastIndex = 1;
assert(!re.test("xx"), "Expected \\A to not match after a non-zero lastIndex with the global flag");
assert.sameValue("xx".replace(/\Ax/ug, "y"), "yx", "Expected \\A to match only once with the global flag");
assert.sameValue("x\nx".replace(/\Ax/umg, "y"), "y\nx", "Expected \\A to match only once with the global flag inside of multiline mode");
