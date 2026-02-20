// Copyright (C) 2025 Richard Gibson. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON rejects text not convertible to string
info: |
  JSON.rawJSON ( text )

  1. Let _jsonString_ be ? ToString(_text_).

includes: [typeCoercion.js]
features: [json-parse-with-source]
---*/

testNotCoercibleToString(function(expectedErrorConstructor, value) {
  assert.throws(expectedErrorConstructor, function() {
    JSON.rawJSON(value);
  });
});
