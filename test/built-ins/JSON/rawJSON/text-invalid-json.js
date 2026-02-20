// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON throws a SyntaxError for invalid JSON text
info: |
  JSON.rawJSON ( text )

  1. Let _jsonString_ be ? ToString(_text_).
  2. If _jsonString_ is the empty String, throw a *SyntaxError* exception.
  3. If either the first or last code unit of _jsonString_ is any of 0x0009
     (CHARACTER TABULATION), 0x000A (LINE FEED), 0x000D (CARRIAGE RETURN),
     0x0020 (SPACE), 0x005B (LEFT SQUARE BRACKET), or 0x007B (LEFT CURLY
     BRACKET), throw a *SyntaxError* exception.
  4. Let _parseResult_ be ? ParseJSON(_jsonString_).

features: [json-parse-with-source]
---*/

var NON_JSON_INPUTS = [
  '',
  'undefined',
  ':',
  ',',
  'True',
  'FALSE',
  '+1',
  '01',
  '00',
  '1.',
  '.1',
  '1.e0',
  '.1e0',
  '1n',
  '1_0',
  '"',
  "''",
  '\\"',
  '\\x41',
  '\\0'
];
for (var i = 0; i < NON_JSON_INPUTS.length; i++) {
  var text = NON_JSON_INPUTS[i];
  assert.throws(SyntaxError, function() {
    JSON.rawJSON(text);
  }, 'JSON.rawJSON(' + JSON.stringify(text) + ')');
}
