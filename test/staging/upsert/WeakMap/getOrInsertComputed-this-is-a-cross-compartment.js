// Copyright (C) 2025 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
flags: [noStrict]
description: |
  pending
esid: proposal-upsert
---*/

const g = createNewGlobal({ newCompartment: true });

var map = g.eval("new WeakMap()");
var foo = {};
var bar = {};

WeakMap.prototype.getOrInsertComputed.call(map, foo, () => 2);
assert.sameValue(map.get(foo), 2);

map.getOrInsertComputed(bar, () => 3);
assert.sameValue(map.get(bar), 3);

