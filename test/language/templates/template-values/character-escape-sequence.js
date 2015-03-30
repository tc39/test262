// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TRV of CharacterEscapeSequence :: SingleEscapeCharacter is the TRV of
    the SingleEscapeCharacter.
    The TRV of CharacterEscapeSequence :: NonEscapeCharacter is the CV of the
    NonEscapeCharacter.
---*/
var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005C\u0027");
})`\'`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005C\u0022");
})`\"`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005C\u005C");
})`\\`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cb");
})`\b`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cf");
})`\f`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cn");
})`\n`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cr");
})`\r`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Ct");
})`\t`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cv");
})`\v`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005C`");
})`\``;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s.raw[0], "\u005Cz");
})`\z`;
assert.sameValue(calls, 1);
