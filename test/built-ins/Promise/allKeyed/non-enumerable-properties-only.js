// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiseallkeyed
description: >
  Promise.allKeyed resolves to an empty result when all own keys are
  non-enumerable
info: |
  PerformPromiseAllKeyed ( variant, promises, constructor, resultCapability, promiseResolve )

  ...
  5. Let allKeys be ? promises.[[OwnPropertyKeys]]().
  6. For each element key of allKeys, do
    a. Let desc be ? promises.[[GetOwnProperty]](key).
    b. If desc is not undefined and desc.[[Enumerable]] is true, then
      ...
includes: [asyncHelpers.js]
flags: [async]
features: [await-dictionary, Reflect]
---*/

var input = {};
Object.defineProperty(input, "first", {
  value: Promise.resolve(1),
  enumerable: false,
  configurable: true
});
Object.defineProperty(input, "second", {
  value: Promise.resolve(2),
  enumerable: false,
  configurable: true
});

asyncTest(function() {
  return Promise.allKeyed(input).then(function(result) {
    assert.sameValue(Object.getPrototypeOf(result), null, "result is null-prototype");
    assert.sameValue(Reflect.ownKeys(result).length, 0, "result has no keys");
  });
});
