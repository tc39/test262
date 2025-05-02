// Copyright (C) 2024 Jonas Haukenes, Mathias Ness. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: proposal-upsert
description: |
  Map.getOrInsertComputed throws when callbackfn throws return if abrubt completion Call(callbackfn, key)
info: |
  Map.prototype.getOrInsertComputed ( key , callbackfn )

  ...

  6. Let value be ? Call(callbackfn, key).
  ...
features: [upsert]
flags: [noStrict]
---*/
var map = new Map();

assert.throws(Error, function() {
  map.getOrInsertComputed(1, function() {
    throw new Error('throw in callback');
  })
}, Error);

