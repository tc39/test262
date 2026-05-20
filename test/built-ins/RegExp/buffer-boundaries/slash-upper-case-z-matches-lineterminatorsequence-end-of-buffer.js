// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\Z` (lower-case z) matches end of buffer in any unicode mode.
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
features: [regexp-buffer-boundaries]
---*/

assert(/x\Z/u.test("x"), "Expected \\Z to match the end of the buffer outside of multiline mode");
assert(/x\Z/um.test("x"), "Expected \\Z to match the end of the buffer inside of multiline mode");
assert(/x\Z/u.test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/u.test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/u.test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/u.test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/u.test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/um.test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/um.test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/um.test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/um.test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/um.test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(!/x\Z/u.test("xy"), "Expected \\Z to not match when not at the end of the buffer outside of multiline mode");
assert(!/x\Z/um.test("xy"), "Expected \\Z to not match when not at the end of the buffer inside of multiline mode");
assert(!/x\Z/u.test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/u.test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/u.test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/u.test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/u.test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/um.test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/um.test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/um.test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/um.test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/um.test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");

assert(/x\Z/v.test("x"), "Expected \\Z to match the end of the buffer outside of multiline mode");
assert(/x\Z/vm.test("x"), "Expected \\Z to match the end of the buffer inside of multiline mode");
assert(/x\Z/v.test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/v.test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/v.test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/v.test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/v.test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(/x\Z/vm.test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/vm.test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/vm.test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/vm.test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(/x\Z/vm.test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(!/x\Z/v.test("xy"), "Expected \\Z to not match when not at the end of the buffer outside of multiline mode");
assert(!/x\Z/vm.test("xy"), "Expected \\Z to not match when not at the end of the buffer inside of multiline mode");
assert(!/x\Z/v.test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/v.test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/v.test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/v.test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/v.test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!/x\Z/vm.test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/vm.test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/vm.test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/vm.test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!/x\Z/vm.test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");

assert(new RegExp("x\\Z", "u").test("x"), "Expected \\Z to match the end of the buffer outside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x"), "Expected \\Z to match the end of the buffer inside of multiline mode");
assert(new RegExp("x\\Z", "u").test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "u").test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "u").test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "u").test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "u").test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "um").test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("xy"), "Expected \\Z to not match when not at the end of the buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("xy"), "Expected \\Z to not match when not at the end of the buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "u").test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "um").test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");

assert(new RegExp("x\\Z", "v").test("x"), "Expected \\Z to match the end of the buffer outside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x"), "Expected \\Z to match the end of the buffer inside of multiline mode");
assert(new RegExp("x\\Z", "v").test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "v").test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "v").test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "v").test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "v").test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer outside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x\r"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x\u2028"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x\u2029"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(new RegExp("x\\Z", "vm").test("x\r\n"), "Expected \\Z to match when at the end of a line before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("xy"), "Expected \\Z to not match when not at the end of the buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("xy"), "Expected \\Z to not match when not at the end of the buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "v").test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer outside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("x\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("x\ry"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("x\u2028y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("x\u2029y"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
assert(!new RegExp("x\\Z", "vm").test("x\r\ny"), "Expected \\Z to not match when at the end of a line not before the end of a buffer inside of multiline mode");
