// Copyright (C) 2026 dmvjs. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-regexp.prototype.source
description: >
  Return value can be used to create an equivalent RegExp when the
  [[OriginalSource]] internal slot contains a paragraph separator (U+2029)
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

var re = eval('/' + new RegExp('\u2029').source + '/');

assert.sameValue(re.test('\u2029'), true, 'input: "\\u2029"');
assert.sameValue(re.test('_\u2029_'), true, 'input: "_\\u2029_"');
assert.sameValue(re.test('\\u2029'), false, 'input: "\\\\u2029"');
assert.sameValue(re.test('\u2028'), false, 'input: "\\u2028"');
assert.sameValue(re.test('\n'), false, 'input: "\\n"');
