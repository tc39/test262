// Copyright (C) 2015 the V8 project authors. All rights reserved.
// Copyright (C) 2024 Sune Eriksson Lianes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is a WeakMap object.
info: |
  Map.prototype.getOrInsert ( key , value )

  ...
  1. Let M be the this value.
  2. Perform ? RequireInternalSlot(M, [[MapData]]).
  ...
features: [WeakMap]
flags: [noStrict]
---*/
assertThrowsInstanceOf(function() {
  Map.prototype.getOrInsert.call(new WeakMap(), 1, 1);
}, TypeError);

assertThrowsInstanceOf(function() {
  var map = new Map();
  map.getOrInsert.call(new WeakMap(), 1, 1);
}, TypeError);

