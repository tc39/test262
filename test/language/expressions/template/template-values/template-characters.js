// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TV of TemplateCharacters :: TemplateCharacter is the TV of
    TemplateCharacter.
    The TV of NoSubstitutionTemplate :: ` TemplateCharacters ` is the TV of
    TemplateCharacters.
    The TRV of TemplateCharacters :: TemplateCharacter is the TRV of
    TemplateCharacter.
---*/

var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'f', 'TemplateCharacters template value');
  assert.sameValue(s.raw[0], 'f', 'TemplateCharacters template raw value');
})`f`;
assert.sameValue(calls, 1);

assert.sameValue(`test`, 'test', 'TemplateCharacters template value');
