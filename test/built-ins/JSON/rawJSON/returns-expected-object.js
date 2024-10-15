// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: Object returned from JSON.rawJSON() is the expected shape.
info: |
  JSON.rawJSON ( text )

  5. Let _obj_ be OrdinaryObjectCreate(*null*, _internalSlotsList_).
  6. Perform ! CreateDataPropertyOrThrow(_obj_, *"rawJSON"*, _jsonString_).
  ...
  8. Return _obj_.

includes: [compareArray.js]
features: [json-parse-with-source]
---*/

function assertIsRawJson(rawJSON, expectedRawJSONValue) {
  assert.sameValue(Object.getPrototypeOf(rawJSON), null, "RawJSON object should have null prototype");
  assert(Object.hasOwn(rawJSON, "rawJSON"), "RawJSON object should have rawJSON own property");
  assert.compareArray(Object.getOwnPropertyNames(rawJSON), ["rawJSON"], "RawJSON object should have only rawJSON own property");
  assert.compareArray(Object.getOwnPropertySymbols(rawJSON), [], "RawJSON object should have no own property symbols");
  assert.sameValue(rawJSON.rawJSON, expectedRawJSONValue, "rawJSON value");
}

assertIsRawJson(JSON.rawJSON(1), "1");
assertIsRawJson(JSON.rawJSON(null), "null");
assertIsRawJson(JSON.rawJSON(true), "true");
assertIsRawJson(JSON.rawJSON(false), "false");
assertIsRawJson(JSON.rawJSON('"foo"'), '"foo"');
