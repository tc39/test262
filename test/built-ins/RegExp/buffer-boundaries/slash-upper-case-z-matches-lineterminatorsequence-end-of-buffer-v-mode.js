// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\Z` (upper-case z) matches end of buffer after optional LineTerminatorSequence in v-mode.
info: |
  Runtime Semantics: CompileAssertion
  
  Assertion :: \Z
    1. Return a new Matcher with parameters (matchState, continue) that captures nothing and performs the following steps when called:
      a. Assert: matchState is a MatchState.
      b. Assert: continue is a MatcherContinuation.
      c. Let input be matchState.[[Input]].
      d. Let e be matchState.[[EndIndex]].
      e. Let inputLength be the number of elements in input.
      f. If e = inputLength, return continue(matchState).
      g. If e = inputLength - 1 and the character input[e] is matched by |LineTerminator|, then
          i. Return continue(matchState).
      h. If e = inputLength - 2, the character input[e] is matched by <CR>; and the character input[e + 1] is matched by <LF>;, then
          i. Return continue(matchState).
      i. Return failure.

esid: sec-patterns
features: [regexp-buffer-boundaries, regexp-lookbehind, regexp-v-flag]
---*/

var terminators = [
  ["\n", "<LF>"],
  ["\r", "<CR>"],
  ["\u2028", "<LS>"],
  ["\u2029", "<PS>"],
  ["\r\n", "<CRLF>"],
];

assert(/x\Z/v.test("x"), "Expected \\Z to match end-of-buffer outside of multiline mode (literal)");
assert(/x\Z/vm.test("x"), "Expected \\Z to match end-of-buffer inside of multiline mode (literal)");
assert(!/x\Z/v.test("xy"), "Expected \\Z to not match when not at end-of-buffer outside of multiline mode (literal)");
assert(!/x\Z/vm.test("xy"), "Expected \\Z to not match when not at end-of-buffer inside of multiline mode (literal)");

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(/x\Z/v.test("x" + lts), "Expected \\Z to match when at " + desc + " before end-of-buffer outside of multiline mode (literal)");
  assert(/x\Z/vm.test("x" + lts), "Expected \\Z to match when at " + desc + " before end-of-buffer inside of multiline mode (literal)");
  assert(!/x\Z/v.test("x" + lts + "y"), "Expected \\Z to not match when at " + desc + " but not before end-of-buffer outside of multiline mode (literal)");
  assert(!/x\Z/vm.test("x" + lts + "y"), "Expected \\Z to not match when at " + desc + " but not before end-of-buffer inside of multiline mode (literal)");
}

assert(new RegExp("x\\Z", "v").test("x"), "Expected \\Z to match end-of-buffer outside of multiline mode (constructed)");
assert(new RegExp("x\\Z", "vm").test("x"), "Expected \\Z to match end-of-buffer inside of multiline mode (constructed)");
assert(!new RegExp("x\\Z", "v").test("xy"), "Expected \\Z to not match when not at end-of-buffer outside of multiline mode (constructed)");
assert(!new RegExp("x\\Z", "vm").test("xy"), "Expected \\Z to not match when not at end-of-buffer inside of multiline mode (constructed)");

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(new RegExp("x\\Z", "v").test("x" + lts), "Expected \\Z to match when at " + desc + " before end-of-buffer outside of multiline mode (constructed)");
  assert(new RegExp("x\\Z", "vm").test("x" + lts), "Expected \\Z to match when at " + desc + " before end-of-buffer inside of multiline mode (constructed)");
  assert(!new RegExp("x\\Z", "v").test("x" + lts + "y"), "Expected \\Z to not match when at " + desc + " but not before end-of-buffer outside of multiline mode (constructed)");
  assert(!new RegExp("x\\Z", "vm").test("x" + lts + "y"), "Expected \\Z to not match when at " + desc + " but not before end-of-buffer inside of multiline mode (constructed)");
}

assert(/\Z/v.test(""), "Expected \\Z to match empty input");
assert.sameValue(/\Z/v.exec("")[0], "", "Expected \\Z to match empty string in empty input");
for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert.sameValue(/\Z/v.exec(lts).index, 0, "Expected \\Z to match at start of input consisting only of " + desc);
}

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert.sameValue(/x\Z/v.exec("x" + lts)[0], "x", "Expected \\Z to not consume " + desc);
  assert(/x\Z(?:\r\n|[\n\r\u2028\u2029])$/v.test("x" + lts), "Expected \\Z to be followed by " + desc + " (literal)");
  assert(new RegExp("x\\Z" + lts + "$", "v").test("x" + lts), "Expected \\Z to be followed by " + desc + " (constructed)");
  assert.sameValue(/\Z/v.exec("x" + lts).index, 1, "Expected \\Z to first match before " + desc);
}
assert(/x\r\Z\n/v.test("x\r\n"), "Expected \\Z to match between <CR> and <LF> of a final <CRLF>");
assert.sameValue(/\Z/v.exec("x\r\n").index, 1, "Expected \\Z to first match before a final <CRLF>");
assert.sameValue(/\Z/v.exec("x\n\n").index, 2, "Expected \\Z to first match before the last of two final <LF>");

for (var i = 0; i < terminators.length; i++) {
  for (var j = 0; j < terminators.length; j++) {
    var lts = terminators[i][0] + terminators[j][0], desc = terminators[i][1] + terminators[j][1];
    var expected = lts === "\r\n";
    assert.sameValue(/x\Z/v.test("x" + lts), expected, "Expected \\Z " + (expected ? "" : "not ") + "to match before final " + desc + " outside of multiline mode");
    assert.sameValue(/x\Z/vm.test("x" + lts), expected, "Expected \\Z " + (expected ? "" : "not ") + "to match before final " + desc + " inside of multiline mode");
  }
}

for (var i = 0; i < terminators.length; i++) {
  var lts = terminators[i][0], desc = terminators[i][1];
  assert(/x(?=\Z)/v.test("x" + lts), "Expected \\Z in lookahead to match before final " + desc);
  assert(!/x(?=\Z)/v.test("x" + lts + "y"), "Expected \\Z in lookahead to not match before non-final " + desc);
  assert(!/x(?!\Z)/v.test("x" + lts), "Expected \\Z in negative lookahead to not match before final " + desc);
  assert(/x(?!\Z)/v.test("x" + lts + "y"), "Expected \\Z in negative lookahead to match before non-final " + desc);
  assert.sameValue(/(?<=x\Z)[^]/v.exec("x" + lts)[0], lts[0], "Expected \\Z in lookbehind to match before final " + desc);
  assert(!/(?<=x\Z)/v.test("x" + lts + "y"), "Expected \\Z in lookbehind to not match before non-final " + desc);
  assert(/(?<!x\Z)y/v.test("x" + lts + "y"), "Expected \\Z in negative lookbehind to match before non-final " + desc);
}
