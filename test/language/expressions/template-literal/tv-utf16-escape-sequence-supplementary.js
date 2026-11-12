// Copyright (C) 2026 hexbinoct. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-static-semantics-tv
description: >
    Template values of \u{} escape sequences for code points above U+FFFF
info: |
    The TV of TemplateCharacter :: \ TemplateEscapeSequence is the SV of
    TemplateEscapeSequence.
    The SV of UnicodeEscapeSequence :: u{ CodePoint } is the result of
    performing UTF16EncodeCodePoint on the MV of CodePoint.

    UTF16EncodeCodePoint ( cp )

    1. Assert: 0 <= cp <= 0x10FFFF.
    2. If cp <= 0xFFFF, return the String value consisting of the code unit
       whose numeric value is cp.
    3. Let cu1 be the code unit whose numeric value is
       floor((cp - 0x10000) / 0x400) + 0xD800.
    4. Let cu2 be the code unit whose numeric value is
       ((cp - 0x10000) modulo 0x400) + 0xDC00.
    5. Return the string-concatenation of cu1 and cu2.

    Steps 3 through 5 are reached only for code points in the range 0x10000
    through 0x10FFFF, which encode as a surrogate pair.
---*/

var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s[0],
    '\uD800\uDC00',
    'template value of U+10000, the least code point encoded as a surrogate pair'
  );
  assert.sameValue(
    s.raw[0], '\\u{10000}', 'template raw value of \\u{10000}'
  );
})`\u{10000}`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s[0],
    '\uD801\uDC37',
    'template value of U+10437'
  );
  assert.sameValue(
    s.raw[0], '\\u{10437}', 'template raw value of \\u{10437}'
  );
})`\u{10437}`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s[0],
    '\uDBFF\uDFFF',
    'template value of U+10FFFF, the greatest code point'
  );
  assert.sameValue(
    s.raw[0], '\\u{10FFFF}', 'template raw value of \\u{10FFFF}'
  );
})`\u{10FFFF}`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(
    s[0],
    '\uD800\uDC00',
    'template value of U+10000 (with leading zeros)'
  );
  assert.sameValue(
    s.raw[0], '\\u{010000}', 'template raw value of \\u{010000}'
  );
})`\u{010000}`;
assert.sameValue(calls, 1);

assert.sameValue(
  `\u{10437}`,
  '\uD801\uDC37',
  'template value in an untagged template literal'
);
assert.sameValue(
  `a\u{10437}b`,
  'a\uD801\uDC37b',
  'surrogate pair concatenates with adjacent template characters'
);
