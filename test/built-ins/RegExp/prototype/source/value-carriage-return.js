// Copyright (C) 2026 dmvjs. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-regexp.prototype.source
description: >
  Return value can be used to create an equivalent RegExp when the
  [[OriginalSource]] internal slot contains a carriage return (U+000D)
info: |
  [...]
  5. Let src be R.[[OriginalSource]].
  6. Let flags be R.[[OriginalFlags]].
  7. Return EscapeRegExpPattern(src, flags).

  21.2.3.2.4 Runtime Semantics: EscapeRegExpPattern

  [...] the internal procedure that would result from evaluating S as a
  Pattern[~U] (Pattern[+U] if F contains "u") must behave identically to the
  internal procedure given by the constructed object's [[RegExpMatcher]]
  internal slot.
---*/

var re = eval('/' + new RegExp('\r').source + '/');

assert.sameValue(re.test('\r'), true, 'input: "\\r"');
assert.sameValue(re.test('_\r_'), true, 'input: "_\\r_"');
assert.sameValue(re.test('\\r'), false, 'input: "\\\\r"');
assert.sameValue(re.test('\n'), false, 'input: "\\n"');
assert.sameValue(re.test('r'), false, 'input: "r"');
