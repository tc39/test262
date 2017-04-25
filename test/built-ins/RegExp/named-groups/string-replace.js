// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  String argument to String.prototype.replace can refer to groups as $<>
esid: pending
features: [regexp-named-groups]
---*/

// --- Unicode mode ---

// @@replace with a string replacement argument (no named captures).
{
  let re = /(.)(.)|(x)/u;
  assert.sameValue("$<snd>$<fst>cd", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("bacd", "abcd".replace(re, "$2$1"));
  assert.sameValue("cd", "abcd".replace(re, "$3"));
  assert.sameValue("$<sndcd", "abcd".replace(re, "$<snd"));
  assert.sameValue("$<42a>cd", "abcd".replace(re, "$<42$1>"));
  assert.sameValue("$<fth>cd", "abcd".replace(re, "$<fth>"));
  assert.sameValue("$<a>cd", "abcd".replace(re, "$<$1>"));
}

// @@replace with a string replacement argument (global, named captures).
{
  let re = /(?<fst>.)(?<snd>.)|(?<thd>x)/gu;
  assert.sameValue("badc", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("badc", "abcd".replace(re, "$2$1"));
  assert.sameValue("", "abcd".replace(re, "$<thd>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<snd"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<42$1>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<fth>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<$1>"));
}

// @@replace with a string replacement argument (non-global, named captures).
{
  let re = /(?<fst>.)(?<snd>.)|(?<thd>x)/u;
  assert.sameValue("bacd", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("bacd", "abcd".replace(re, "$2$1"));
  assert.sameValue("cd", "abcd".replace(re, "$<thd>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<snd"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<42$1>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<fth>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<$1>"));
}

// --- Non-Unicode mode ---

// @@replace with a string replacement argument (no named captures).
{
  let re = /(.)(.)|(x)/;
  assert.sameValue("$<snd>$<fst>cd", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("bacd", "abcd".replace(re, "$2$1"));
  assert.sameValue("cd", "abcd".replace(re, "$3"));
  assert.sameValue("$<sndcd", "abcd".replace(re, "$<snd"));
  assert.sameValue("$<42a>cd", "abcd".replace(re, "$<42$1>"));
  assert.sameValue("$<fth>cd", "abcd".replace(re, "$<fth>"));
  assert.sameValue("$<a>cd", "abcd".replace(re, "$<$1>"));
}

// @@replace with a string replacement argument (global, named captures).
{
  let re = /(?<fst>.)(?<snd>.)|(?<thd>x)/g;
  assert.sameValue("badc", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("badc", "abcd".replace(re, "$2$1"));
  assert.sameValue("", "abcd".replace(re, "$<thd>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<snd"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<42$1>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<fth>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<$1>"));
}

// @@replace with a string replacement argument (non-global, named captures).
{
  let re = /(?<fst>.)(?<snd>.)|(?<thd>x)/;
  assert.sameValue("bacd", "abcd".replace(re, "$<snd>$<fst>"));
  assert.sameValue("bacd", "abcd".replace(re, "$2$1"));
  assert.sameValue("cd", "abcd".replace(re, "$<thd>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<snd"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<42$1>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<fth>"));
  assert.throws(SyntaxError, () => "abcd".replace(re, "$<$1>"));
}
