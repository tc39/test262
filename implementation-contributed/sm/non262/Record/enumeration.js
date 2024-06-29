// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Record-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
var rec = #{ x: 1, y: 2, a: 3 };

var keys = Object.keys(rec);
assert.sameValue(keys.length, 3);
assert.sameValue(keys[0], "a");
assert.sameValue(keys[1], "x");
assert.sameValue(keys[2], "y");

var values = Object.values(rec);
assert.sameValue(values.length, 3);
assert.sameValue(values[0], 3);
assert.sameValue(values[1], 1);
assert.sameValue(values[2], 2);

var entries = Object.entries(rec);
assert.sameValue(entries.length, 3);
assert.sameValue(entries[0][0], "a");
assert.sameValue(entries[0][1], 3);
assert.sameValue(entries[1][0], "x");
assert.sameValue(entries[1][1], 1);
assert.sameValue(entries[2][0], "y");
assert.sameValue(entries[2][1], 2);

var ownKeys = Reflect.ownKeys(Object(rec));
assert.sameValue(ownKeys.length, 3);
assert.sameValue(ownKeys[0], "a");
assert.sameValue(ownKeys[1], "x");
assert.sameValue(ownKeys[2], "y");

var spreadKeys = Object.keys({ ...rec });
assert.sameValue(spreadKeys.length, 3);
assert.sameValue(spreadKeys[0], "a");
assert.sameValue(spreadKeys[1], "x");
assert.sameValue(spreadKeys[2], "y");

var spreadKeysObj = Object.keys({ ...Object(rec) });
assert.sameValue(spreadKeysObj.length, 3);
assert.sameValue(spreadKeysObj[0], "a");
assert.sameValue(spreadKeysObj[1], "x");
assert.sameValue(spreadKeysObj[2], "y");

var i = 0;
for (var key in rec) {
  switch (i++) {
	case 0: assert.sameValue(key, "a"); break;
	case 1: assert.sameValue(key, "x"); break;
	case 2: assert.sameValue(key, "y"); break;
	default: assertUnreachable();
  }
}

