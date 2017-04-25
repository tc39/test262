// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Without the dotAll flag, . does not match newlines
info: |
  21.2.2.8 Atom
  The production Atom::. evaluates as follows:
    1. If DotAll is true, then
      a. Let A be the set of all characters.
    2. Otherwise, let A be the set of all characters except LineTerminator.
    3. Call CharacterSetMatcher(A, false) and return its Matcher result.

esid: sec-atom
---*/

{
  let re = /^.$/;
  assert.sameValue(true, re.test("a"));
  assert.sameValue(true, re.test("3"));
  assert.sameValue(true, re.test("π"));
  assert.sameValue(true, re.test("\u2027"));
  assert.sameValue(true, re.test("\u0085"));
  assert.sameValue(true, re.test("\v"));
  assert.sameValue(true, re.test("\f"));
  assert.sameValue(true, re.test("\u180E"));
  assert.sameValue(false, re.test("\u{10300}"));  // Supplementary plane.
  assert.sameValue(false, re.test("\n"));
  assert.sameValue(false, re.test("\r"));
  assert.sameValue(false, re.test("\u2028"));
  assert.sameValue(false, re.test("\u2029"));
}

// Default '.' behavior (unicode).
{
  let re = /^.$/u;
  assert.sameValue(true, re.test("a"));
  assert.sameValue(true, re.test("3"));
  assert.sameValue(true, re.test("π"));
  assert.sameValue(true, re.test("\u2027"));
  assert.sameValue(true, re.test("\u0085"));
  assert.sameValue(true, re.test("\v"));
  assert.sameValue(true, re.test("\f"));
  assert.sameValue(true, re.test("\u180E"));
  assert.sameValue(true, re.test("\u{10300}"));  // Supplementary plane.
  assert.sameValue(false, re.test("\n"));
  assert.sameValue(false, re.test("\r"));
  assert.sameValue(false, re.test("\u2028"));
  assert.sameValue(false, re.test("\u2029"));
}

// Turning on the m flag doesn't affect any of the above results

{
  let re = /^.$/m;
  assert.sameValue(true, re.test("a"));
  assert.sameValue(true, re.test("3"));
  assert.sameValue(true, re.test("π"));
  assert.sameValue(true, re.test("\u2027"));
  assert.sameValue(true, re.test("\u0085"));
  assert.sameValue(true, re.test("\v"));
  assert.sameValue(true, re.test("\f"));
  assert.sameValue(true, re.test("\u180E"));
  assert.sameValue(false, re.test("\u{10300}"));  // Supplementary plane.
  assert.sameValue(false, re.test("\n"));
  assert.sameValue(false, re.test("\r"));
  assert.sameValue(false, re.test("\u2028"));
  assert.sameValue(false, re.test("\u2029"));
}

// Default '.' behavior (unicode).
{
  let re = /^.$/mu;
  assert.sameValue(true, re.test("a"));
  assert.sameValue(true, re.test("3"));
  assert.sameValue(true, re.test("π"));
  assert.sameValue(true, re.test("\u2027"));
  assert.sameValue(true, re.test("\u0085"));
  assert.sameValue(true, re.test("\v"));
  assert.sameValue(true, re.test("\f"));
  assert.sameValue(true, re.test("\u180E"));
  assert.sameValue(true, re.test("\u{10300}"));  // Supplementary plane.
  assert.sameValue(false, re.test("\n"));
  assert.sameValue(false, re.test("\r"));
  assert.sameValue(false, re.test("\u2028"));
  assert.sameValue(false, re.test("\u2029"));
}
