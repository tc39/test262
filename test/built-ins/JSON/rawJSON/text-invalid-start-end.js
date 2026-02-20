// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON throws a SyntaxError for text with disallowed start/end chars
info: |
  JSON.rawJSON ( text )

  1. Let _jsonString_ be ? ToString(_text_).
  2. If _jsonString_ is the empty String, throw a *SyntaxError* exception.
  3. If either the first or last code unit of _jsonString_ is any of 0x0009
     (CHARACTER TABULATION), 0x000A (LINE FEED), 0x000D (CARRIAGE RETURN),
     0x0020 (SPACE), 0x005B (LEFT SQUARE BRACKET), or 0x007B (LEFT CURLY
     BRACKET), throw a *SyntaxError* exception.

features: [json-parse-with-source]
---*/

var DISALLOWED_TEXTS = ['[]', '[0]', '{}', '{"foo":"bar"}'];
for (var i = 0; i < DISALLOWED_TEXTS.length; i++) {
  var text = DISALLOWED_TEXTS[i];
  assert.throws(SyntaxError, function() {
    JSON.rawJSON(text);
  }, 'JSON.rawJSON(' + JSON.stringify(text) + ')');
}

const DISALLOWED_CHARS = ['\t', '\n', '\r', ' ', '[', '{'];
for (const char of DISALLOWED_CHARS) {
  var text = char + '123';
  assert.throws(SyntaxError, function() {
    JSON.rawJSON(text);
  }, 'JSON.rawJSON(' + JSON.stringify(text) + ')');

  text = '123' + char;
  assert.throws(SyntaxError, function() {
    JSON.rawJSON(text);
  }, 'JSON.rawJSON(' + JSON.stringify(text) + ')');
}
