// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\z` (lower-case z) matches end of buffer in v-mode.
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
features: [regexp-buffer-boundaries, regexp-lookbehind, regexp-v-flag]
---*/

assert(/x\z/v.test("x"), "Expected \\z to match end-of-buffer outside of multiline mode (literal)");
assert(/x\z/vm.test("x"), "Expected \\z to match end-of-buffer inside of multiline mode (literal)");
assert(!/x\z/v.test("xy"), "Expected \\z to not match when not at end-of-buffer outside of multiline mode (literal)");
assert(!/x\z/vm.test("xy"), "Expected \\z to not match when not at end-of-buffer inside of multiline mode (literal)");

var terminators = [
  ["\n", "<LF>"],
  ["\r", "<CR>"],
  ["\u2028", "<LS>"],
  ["\u2029", "<PS>"],
  ["\r\n", "<CRLF>"],
];

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(!/x\z/v.test("x" + lts), "Expected \\z to not match when only at " + desc + " outside of multiline mode (literal)");
  assert(!/x\z/vm.test("x" + lts), "Expected \\z to not match when only at " + desc + " inside of multiline mode (literal)");
}

assert(new RegExp("x\\z", "v").test("x"), "Expected \\z to match end-of-buffer outside of multiline mode (constructed)");
assert(new RegExp("x\\z", "vm").test("x"), "Expected \\z to match end-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "v").test("xy"), "Expected \\z to not match when not at end-of-buffer outside of multiline mode (constructed)");
assert(!new RegExp("x\\z", "vm").test("xy"), "Expected \\z to not match when not at end-of-buffer inside of multiline mode (constructed)");

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(!new RegExp("x\\z", "v").test("x" + lts), "Expected \\z to not match when only at " + desc + " outside of multiline mode (constructed)");
  assert(!new RegExp("x\\z", "vm").test("x" + lts), "Expected \\z to not match when only at " + desc + " inside of multiline mode (constructed)");
}

assert(/\z/v.test(""), "Expected \\z to match empty input");
assert.sameValue(/\z/v.exec("")[0], "", "Expected \\z to match empty string in empty input");

assert.sameValue(/x\z/v.exec("x")[0], "x", "Expected \\z to be zero-width");
assert.sameValue(/\z/v.exec("xy").index, 2, "Expected \\z to match only at end-of-buffer");
for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert.sameValue(/\z/v.exec("x" + lts).index, 1 + lts.length, "Expected \\z to match only after final " + desc);
}

assert(/x(?=\z)/v.test("x"), "Expected \\z in lookahead to match at end-of-buffer");
assert(!/x(?=\z)/v.test("xy"), "Expected \\z in lookahead to not match when not at end-of-buffer");
assert(!/x(?!\z)/v.test("x"), "Expected \\z in negative lookahead to not match at end-of-buffer");
assert(/x(?!\z)/v.test("xy"), "Expected \\z in negative lookahead to match when not at end-of-buffer");
assert(/(?<=x\z)/v.test("x"), "Expected \\z in lookbehind to match at end-of-buffer");
assert(!/(?<=x\z)/v.test("xy"), "Expected \\z in lookbehind to not match when not at end-of-buffer");
assert.sameValue(/(?<!\z)/v.exec("x").index, 0, "Expected \\z in negative lookbehind to match when not at end-of-buffer");
assert(!/(?<!\z)$/v.test("x"), "Expected \\z in negative lookbehind to not match at end-of-buffer");
for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(!/x(?=\z)/v.test("x" + lts), "Expected \\z in lookahead to not match before final " + desc);
  assert(/x(?!\z)/v.test("x" + lts), "Expected \\z in negative lookahead to match before final " + desc);
}
