// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.israwjson
description: >
  JSON.isRawJSON can be invoked as a function
info: |
  JSON.isRawJSON ( O )

  1. If Type(O) is Object and O has an [[IsRawJSON]] internal slot, return true.
  2. Return false.

includes: [deepEqual.js]
features: [json-parse-with-source]
---*/

function assertIsRawJson(rawJson, expectedRawJsonValue) {
  assert.sameValue(null, Object.getPrototypeOf(rawJson));
  assert(Object.hasOwn(rawJson, 'rawJSON'));
  assert.deepEqual(['rawJSON'], Object.getOwnPropertyNames(rawJson));
  assert.deepEqual([], Object.getOwnPropertySymbols(rawJson));
  assert.sameValue(expectedRawJsonValue, rawJson.rawJSON);
}

assertIsRawJson(JSON.rawJSON(1), '1');
assertIsRawJson(JSON.rawJSON(null), 'null');
assertIsRawJson(JSON.rawJSON(true), 'true');
assertIsRawJson(JSON.rawJSON(false), 'false');
assertIsRawJson(JSON.rawJSON('"foo"'), '"foo"');


const values = [1, 1.1, null, false, true, '123'];
for (const value of values) {
  assert(!JSON.isRawJSON(value));
  assert(JSON.isRawJSON(JSON.rawJSON(value)));
}
assert(!JSON.isRawJSON(undefined));
assert(!JSON.isRawJSON(Symbol('123')));
assert(!JSON.isRawJSON([]));
assert(!JSON.isRawJSON({}));
assert(!JSON.isRawJSON({ rawJSON: '123' }));
