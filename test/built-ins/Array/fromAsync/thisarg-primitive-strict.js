// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.fromasync
description: >
  If thisArg is a primitive, mapfn is called with it as the this-value in strict
  mode
info: |
  6. If _mapping_ is *true*, then
    a. Let _mappedValue_ be Call(_mapfn_, _thisArg_, « _nextValue_, 𝔽(_k_) »).

  In OrdinaryCallBindThis, _thisArgument_ is always bound as the this-value in
  strict mode (_F_.[[ThisMode]] is ~strict~, where _F_ is the function object.)
flags: [async, onlyStrict]
includes: [asyncHelpers.js]
features: [Array.fromAsync]
---*/

asyncTest(async () => {
  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, undefined, "undefined thisArg should be bound as the this-value of mapfn");
  }, undefined);

  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, null, "null thisArg should be bound as the this-value of mapfn");
  }, null);

  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, "string", "string thisArg should be bound as the this-value of mapfn");
  }, "string");

  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, 3.1416, "number thisArg should be bound as the this-value of mapfn");
  }, 3.1416);

  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, 42n, "bigint thisArg should be bound as the this-value of mapfn");
  }, 42n);

  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, true, "boolean thisArg should be bound as the this-value of mapfn");
  }, true);

  const symbolThis = Symbol("symbol");
  await Array.fromAsync([1, 2, 3], async function () {
    assert.sameValue(this, symbolThis, "symbol thisArg should be bound as the this-value of mapfn");
  }, symbolThis);
});
