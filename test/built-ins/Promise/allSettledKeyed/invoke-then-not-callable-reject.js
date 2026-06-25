// Copyright (C) 2026 Danial Asaria (Bloomberg LP). All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-performpromiseallkeyed
description: >
  Rejects when promiseResolve returns an object without a callable `then` method
info: |
  PerformPromiseAllKeyed ( variant, promises, constructor, resultCapability, promiseResolve )

  ...
  6. For each element key of allKeys, do
    ...
    b. If desc is not undefined and desc.[[Enumerable]] is true, then
      ...
      iv. Let nextPromise be ? Call(promiseResolve, constructor, « nextValue »).
      ...
      xiii. Perform ? Invoke(nextPromise, "then", « onFulfilled, onRejected »).
includes: [asyncHelpers.js]
flags: [async]
features: [await-dictionary]
---*/

Promise.resolve = function() {
  return {};
};

asyncTest(function() {
  return assert.throwsAsync(TypeError, function() {
    return Promise.allSettledKeyed({ key: 1 });
  });
});
