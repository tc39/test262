// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.8.6
description: >
    The TV of TemplateCharacter :: $ is the code unit value 0x0024.
    The TV of TemplateCharacter :: \ EscapeSequence is the CV of
    EscapeSequence.
    The TV of TemplateCharacter :: LineContinuation is the TV of
    LineContinuation. The TV of LineContinuation :: \ LineTerminatorSequence is
    the empty code unit sequence.
    The TRV of TemplateCharacter :: $ is the code unit value 0x0024.
---*/

var calls;

assert.sameValue(`\uc548\uB155`, "안녕");
assert.sameValue(`\xff`, "\xff");
assert.sameValue(`\n`, "\n");
assert.sameValue(`\
`, '');

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], '$', '`$` character template value');
  assert.sameValue(s.raw[0], '$', '`$` character template raw value');
})`$`;
assert.sameValue(calls, 1);
