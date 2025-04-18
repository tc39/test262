// Copyright (C) 2025 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags: [noStrict]
description: |
  pending
esid: proposal-upsert
---*/

const g = createNewGlobal({ newCompartment: true });

var map = g.eval("new Map()");

Map.prototype.getOrInsert.call(map, 1, 2);
assert.sameValue(map.get(1), 2);

map.getOrInsert(2, 3);
assert.sameValue(map.get(2), 3);

