// Copyright (C) 2023 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON can be invoked as a function
info: |
  JSON.rawJSON ( text )

  1. Let jsonString be ? ToString(text).
  ...
  4. Let internalSlotsList be « [[IsRawJSON]] ».
  5. Let obj be OrdinaryObjectCreate(null, internalSlotsList).
  6. Perform ! CreateDataPropertyOrThrow(obj, "rawJSON", jsonString).
  7. Perform ! SetIntegrityLevel(obj, frozen).
  8. Return obj.

features: [json-parse-with-source]
---*/

const tooBigForNumber = BigInt(Number.MAX_SAFE_INTEGER) + 2n;
const intToBigInt = (key, val, { source }) =>
  typeof val === 'number' && val % 1 === 0 ? BigInt(source) : val;
const roundTripped = JSON.parse(String(tooBigForNumber), intToBigInt);
assert.sameValue(tooBigForNumber, roundTripped);

const bigIntToRawJSON = (key, val) =>
  typeof val === 'bigint' ? JSON.rawJSON(val) : val;
const embedded = JSON.stringify({ tooBigForNumber }, bigIntToRawJSON);
assert.sameValue('{"tooBigForNumber":9007199254740993}', embedded);
