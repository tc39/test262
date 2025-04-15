// Copyright (C) 2025 Jonas Haukenes, Sune Eriksson Lianes. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: proposal-upsert
description: |
  Throws a TypeError if `this` is not an Object.
info: |
  WeakMap.prototype.getOrInsertComputed ( key , callbackfn )

  1. Let M be the this value
  2. Perform ? RequireInternalSlot(M, [[WeakMapData]])
  ...
features: [Symbol]
flags: [noStrict]
---*/
// Copyright (C) 2015 the V8 project authors. All rights reserved.
var m = new WeakMap();

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call(false, {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call(1, {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call("", {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call(undefined, {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call(null, {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call(Symbol(), {}, () => 1);
}, TypeError);

assertThrowsInstanceOf(function () {
    m.getOrInsertComputed.call('', {}, () => 1);
}, TypeError);

