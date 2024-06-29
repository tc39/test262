// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/
var tup = #[1, 2, 3];

var keys = Object.keys(tup);
assert.sameValue(keys.length, 3);
assert.sameValue(keys[0], "0");
assert.sameValue(keys[1], "1");
assert.sameValue(keys[2], "2");

var values = Object.values(tup);
assert.sameValue(values.length, 3);
assert.sameValue(values[0], 1);
assert.sameValue(values[1], 2);
assert.sameValue(values[2], 3);

var entries = Object.entries(tup);
assert.sameValue(entries.length, 3);
assert.sameValue(entries[0][0], "0");
assert.sameValue(entries[0][1], 1);
assert.sameValue(entries[1][0], "1");
assert.sameValue(entries[1][1], 2);
assert.sameValue(entries[2][0], "2");
assert.sameValue(entries[2][1], 3);

var ownKeys = Reflect.ownKeys(Object(tup));
assert.sameValue(ownKeys.length, 3);
assert.sameValue(ownKeys[0], "0");
assert.sameValue(ownKeys[1], "1");
assert.sameValue(ownKeys[2], "2");

var spreadKeys = Object.keys({ ...tup });
assert.sameValue(spreadKeys.length, 3);
assert.sameValue(spreadKeys[0], "0");
assert.sameValue(spreadKeys[1], "1");
assert.sameValue(spreadKeys[2], "2");

var i = 0;
for (var key in tup) {
  switch (i++) {
	case 0: assert.sameValue(key, "0"); break;
	case 1: assert.sameValue(key, "1"); break;
	case 2: assert.sameValue(key, "2"); break;
	default: assertUnreachable();
  }
}

