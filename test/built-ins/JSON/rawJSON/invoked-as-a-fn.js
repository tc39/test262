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

assert.sameValue('1', JSON.stringify(JSON.rawJSON(1)));
assert.sameValue('1.1', JSON.stringify(JSON.rawJSON(1.1)));
assert.sameValue('-1', JSON.stringify(JSON.rawJSON(-1)));
assert.sameValue('-1.1', JSON.stringify(JSON.rawJSON(-1.1)));
assert.sameValue('11', JSON.stringify(JSON.rawJSON(1.1e1)));
assert.sameValue('0.11', JSON.stringify(JSON.rawJSON(1.1e-1)));

assert.sameValue('null', JSON.stringify(JSON.rawJSON(null)));
assert.sameValue('true', JSON.stringify(JSON.rawJSON(true)));
assert.sameValue('false', JSON.stringify(JSON.rawJSON(false)));
assert.sameValue('"foo"', JSON.stringify(JSON.rawJSON('"foo"')));

assert.sameValue('{"42":37}', JSON.stringify({ 42: JSON.rawJSON(37) }));
assert.sameValue(
  '{"x":1,"y":2}',
  JSON.stringify({ x: JSON.rawJSON(1), y: JSON.rawJSON(2) })
);
assert.sameValue(
  '{"x":{"x":1,"y":2}}',
  JSON.stringify({ x: { x: JSON.rawJSON(1), y: JSON.rawJSON(2) } })
);

assert.sameValue('[1,1.1]', JSON.stringify([JSON.rawJSON(1), JSON.rawJSON(1.1)]));
assert.sameValue(
  '["1",true,null,false]',
  JSON.stringify([
    JSON.rawJSON('"1"'),
    JSON.rawJSON(true),
    JSON.rawJSON(null),
    JSON.rawJSON(false),
  ])
);
assert.sameValue(
  '[{"x":1,"y":1}]',
  JSON.stringify([{ x: JSON.rawJSON(1), y: JSON.rawJSON(1) }])
);
