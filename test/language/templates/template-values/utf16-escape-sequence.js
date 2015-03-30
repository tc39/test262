// Copyright (C) Copyright 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 11.1
description: >
    The SV of UnicodeEscapeSequence :: u{ HexDigits } is the UTF16Encoding
    (10.1.1) of the MV of HexDigits.
    The TRV of UnicodeEscapeSequence :: u{ HexDigits } is the sequence
    consisting of code unit value 0x0075 followed by code unit value 0x007B
    followed by TRV of HexDigits followed by code unit value 0x007D.
---*/

var calls;

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'abc', '`` sequence template value');
  assert.sameValue(s.raw[0], 'a\\u{62}c', '`` sequence template raw value');
})`a\u{62}c`;
assert.sameValue(calls, 1);

calls = 0;
(function(s) {
  calls++;
  assert.sameValue(s[0], 'abc', 'HexEscapeSequence template value');
  assert.sameValue(s.raw[0], 'a\\u{000062}c', 'HexEscapeSequence template raw value');
})`a\u{000062}c`;
assert.sameValue(calls, 1);
